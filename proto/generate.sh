#!/usr/bin/env bash

# protoc must be installed
#   brew install protobuf@3
# Note: Stay on protobuf@3 / protoc 3.20.1 for now. Later versions move JS support out.

# HOW TO

# 1 - Go to https://github.com/photocircle/circleapi/blob/develop/proto-gen/proto/web_app_grpc.proto and download it.

# 2 - Replace proto/web_app_grpc.proto with it

# 3 - Run npm run regen-proto

# 4 - Commit the changes

set -e

if ! command -v protoc &> /dev/null
then
  echo "protoc needs to be installed to generate JS code"
  echo "Install with 'brew install protobuf@3'"
  exit
fi

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
if [ ! -f plugins/protoc-gen-grpc-web ]
then
  echo "gRPC web plugin not found. Downloading now."
  mkdir -p plugins/
  # Determine OS and download appropriate version of protoc-gen-grpc-web
  OS=$(uname -s)
  if [ "$OS" = "Linux" ]; then
    echo "Detected Linux OS"
    curl -Lso plugins/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-linux-x86_64
  elif [ "$OS" = "Darwin" ]; then
    echo "Detected macOS"
    curl -Lso plugins/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-darwin-x86_64
  else
    echo "Unsupported OS"
    exit 1
  fi
  chmod +x plugins/protoc-gen-grpc-web
fi

echo "All required software was detected. Generating protobufs..."

echo "Generating app-side protos for gRPC Web"
protoc \
  --proto_path=./ \
  --plugin=protoc-gen-grpc-web=${SCRIPT_DIR}/plugins/protoc-gen-grpc-web \
  --js_out=import_style=commonjs,binary:../src/generated/ \
  --grpc-web_out=import_style=typescript,mode=grpcweb:../src/generated/ \
  ./web_app_grpc.proto

echo "Post-processing generated protos"
mv ../src/generated/web_app_grpc_pb.js ../src/generated/web_app_grpc_pb_internal.js
OS=$(uname -s)
if [ "$OS" = "Linux" ]; then
  sed -i'' -e '/exports/s/^/\/\/COMMENTED BY PHOTOCIRCLE\n\/\//' ../src/generated/web_app_grpc_pb_internal.js
elif [ "$OS" = "Darwin" ]; then
  sed -i '' -e '/exports/s/^/\/\/COMMENTED BY PHOTOCIRCLE\n\/\//' ../src/generated/web_app_grpc_pb_internal.js
else
  echo "Unsupported OS for sed modification"
  exit 1
fi
node postprocess.js

