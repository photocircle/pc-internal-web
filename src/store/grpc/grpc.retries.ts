/* eslint-disable @typescript-eslint/no-explicit-any */
import * as grpcWeb from "grpc-web"

const MAX_RETRIES = 10
const RETRY_INTERVAL = 3000

export class RetryInterceptor implements grpcWeb.UnaryInterceptor<any, any> {
    // eslint-disable-next-line class-methods-use-this
    intercept(
        request: grpcWeb.Request<any, any>,
        invoker: (request: grpcWeb.Request<any, any>) => Promise<grpcWeb.UnaryResponse<any, any>>,
    ) {
        return new Promise<grpcWeb.UnaryResponse<any, any>>((resolve, reject) => {
            const attemptCall = (retriesRemaining = MAX_RETRIES) => {
                invoker(request)
                    .then(resolve)
                    .catch((e) => {
                        if (e && e.code && e.code === grpcWeb.StatusCode.UNKNOWN && retriesRemaining) {
                            setTimeout(() => attemptCall(retriesRemaining - 1), RETRY_INTERVAL)
                        } else {
                            reject(e)
                        }
                    })
            }
            attemptCall()
        })
    }
}
