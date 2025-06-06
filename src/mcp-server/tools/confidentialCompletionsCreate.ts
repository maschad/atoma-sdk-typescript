/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { confidentialCompletionsCreate } from "../../funcs/confidentialCompletionsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.ConfidentialComputeRequest$inboundSchema,
};

export const tool$confidentialCompletionsCreate: ToolDefinition<typeof args> = {
  name: "confidential-completions-create",
  description: `Create confidential completions

This handler processes completions requests in a confidential manner, providing additional
encryption and security measures for sensitive data processing. It supports both streaming and
non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
for full private AI compute.

## Returns

Returns a \`Result\` containing either:
* An HTTP response with the completions result
* A streaming SSE connection for real-time completions
* An \`AtomaProxyError\` error if the request processing fails

## Errors

Returns \`AtomaProxyError::InvalidBody\` if:
* The 'stream' field is missing or invalid in the payload

Returns \`AtomaProxyError::InternalError\` if:
* The inference service request fails
* Response processing encounters errors
* State manager updates fail

## Security Features

* Utilizes AEAD encryption for request/response data
* Supports TEE (Trusted Execution Environment) processing
* Implements secure key exchange using X25519
* Maintains confidentiality throughout the request lifecycle`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await confidentialCompletionsCreate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
