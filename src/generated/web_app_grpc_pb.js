// Sets up the global context, but doesn't properly set up `exports` under Vite
require('./web_app_grpc_pb_internal.js')

// Export all the types to make ES6 module happy
export const {

} = proto.grpc_web
