#!/bin/bash

set -e

npm run fakebuild
rsync -Pravz --delete dist/ ubuntu@dev:/circleapi/circle_service/internal_web_app

