import { Message } from "google-protobuf"

export interface GrpcResponse extends Message {
    // All PhotoCircle gRPC calls provide a statusCode
    // All protobuf messages include things like `toObject`
    getStatusCode: () => number,
    toObject: () => GrpcResponseObject,
}

export interface GrpcResponseObject {
    // All PhotoCircle gRPC responses have a statusCode
    statusCode: number,
}

interface GrpcResultSuccess<T extends GrpcResponseObject> {
    success: true,
    response: T,
}

interface GrpcResultFailure<T extends GrpcResponseObject> {
    success: false,
    response?: T,
    error: string,
}

export type GrpcResult<T extends GrpcResponseObject> = GrpcResultSuccess<T> | GrpcResultFailure<T>

// The expected request argument for a given RPC function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExpectedArgument<RPC extends (...args: any) => Promise<GrpcResponse>> = Parameters<RPC>[0]
