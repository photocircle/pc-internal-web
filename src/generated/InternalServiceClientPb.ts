/**
 * @fileoverview gRPC-Web generated client stub for internal
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as internal_pb from './internal_pb';


export class PhotoCircleWebInternalClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHello = new grpcWeb.MethodDescriptor(
    '/internal.PhotoCircleWebInternal/Hello',
    grpcWeb.MethodType.UNARY,
    internal_pb.HelloRequest,
    internal_pb.HelloResponse,
    (request: internal_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    internal_pb.HelloResponse.deserializeBinary
  );

  hello(
    request: internal_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<internal_pb.HelloResponse>;

  hello(
    request: internal_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: internal_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<internal_pb.HelloResponse>;

  hello(
    request: internal_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: internal_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/internal.PhotoCircleWebInternal/Hello',
        request,
        metadata || {},
        this.methodDescriptorHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/internal.PhotoCircleWebInternal/Hello',
    request,
    metadata || {},
    this.methodDescriptorHello);
  }

}

