const fs = require('fs');

// First, we'll extract all exported symbols using a regex
const regex = /^goog.exportSymbol\(\'proto.grpc_web.([a-zA-Z]+)\'/

const fileContent = fs.readFileSync("../src/generated/web_app_grpc_pb_internal.js", 'utf-8');
const exportedSymbols = fileContent
    .split('\n')
    .map(line => line.match(regex))
    .filter(matches => matches)
    .map(matches => matches[1])
    .map(symbolName => `    ${symbolName},`)
    .join('\n')

// Then we generate an ES Module to wrap the generated code.
const wrapperModule = `\
// Sets up the global context, but doesn't properly set up \`exports\` under Vite
require('./web_app_grpc_pb_internal.js')

// Export all the types to make ES6 module happy
export const {
${exportedSymbols}
} = proto.grpc_web
`

fs.writeFileSync('../src/generated/web_app_grpc_pb.js', wrapperModule, 'utf-8')
