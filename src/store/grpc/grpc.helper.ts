import * as Sentry from "@sentry/react"
import {
    call, put, CallEffect, PutEffect,
} from "redux-saga/effects"
import { Message } from "google-protobuf"
import { Metadata, StatusCode as GrpcStatusCode } from "grpc-web"

import { toast } from "react-toastify"
import { getStatusMessage, grpcClient, grpcMetadata } from "../../common/utils"
import { GrpcResult, GrpcResponse, GrpcResponseObject } from "./grpc.types"

import {
    StatusCode,
} from "../../generated/web_app_grpc_pb.js"
import { logoutRequest } from "../auth/auth.actions"

/**
 * Make a gRPC request, handling errors if necessary
 */
export function* grpcRequest(
    request: Message,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rpc: (request: any, metadata: Metadata) => Promise<Message>,
    showErrorModal = true,
): Generator<CallEffect | PutEffect, GrpcResult<GrpcResponseObject>, GrpcResponse> {
    try {
        // This is a confusing moment:
        // We yield a "call" effect to the saga middleware. The middleware will call the RPC function that has
        // been provided, which we explicitly bind to the context of the `grpcClient`.
        // The RPC function will return a Promise, which the middleware will use to trigger resuming the saga.
        // Finally, if the promise resolves, we get the response object via next(). Otherwise, we get an exception.
        const response = yield call(rpc.bind(grpcClient), request, grpcMetadata)
        const status = response.getStatusCode()
        if (status === StatusCode.SUCCESS) {
            return { success: true, response: response.toObject() }
        }
        if (showErrorModal) {
            toast.error(getStatusMessage(StatusCode, status))
        }
        return { success: false, response: response.toObject(), error: getStatusMessage(StatusCode, status) }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        // An error occurred while attempting to make the RPC call.
        // This means the RPC was not completed at all.
        try {
            if (e.metadata && e.metadata["grpc-status"] === GrpcStatusCode.UNAUTHENTICATED) {
                yield put(logoutRequest())
            } else {
                Sentry.captureException(e, {
                    extra: {
                        "onlineStatus": navigator.onLine,
                        "rpc": rpc.name,
                    },
                })
            }
            return { success: false, error: e.message || "" }
        } catch (innerError) {
            Sentry.captureException(innerError)
            return { success: false, error: "" }
        }
    }
}
