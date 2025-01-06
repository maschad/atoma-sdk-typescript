/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { confidentialChatCreate } from "../funcs/confidentialChatCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ConfidentialChat extends ClientSDK {
  /**
   * Create confidential chat completion
   *
   * @remarks
   * This handler processes chat completion requests in a confidential manner, providing additional
   * encryption and security measures for sensitive data processing. It supports both streaming and
   * non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
   * for full private AI compute.
   *
   * ## Returns
   *
   * Returns a `Result` containing either:
   * * An HTTP response with the chat completion result
   * * A streaming SSE connection for real-time completions
   * * An `AtomaProxyError` error if the request processing fails
   *
   * ## Errors
   *
   * Returns `AtomaProxyError::InvalidBody` if:
   * * The 'stream' field is missing or invalid in the payload
   *
   * Returns `AtomaProxyError::InternalError` if:
   * * The inference service request fails
   * * Response processing encounters errors
   * * State manager updates fail
   *
   * ## Security Features
   *
   * * Utilizes AEAD encryption for request/response data
   * * Supports TEE (Trusted Execution Environment) processing
   * * Implements secure key exchange using X25519
   * * Maintains confidentiality throughout the request lifecycle
   */
  async create(
    request: components.ConfidentialComputeRequest,
    options?: RequestOptions,
  ): Promise<components.ConfidentialComputeResponse> {
    return unwrapAsync(confidentialChatCreate(
      this,
      request,
      options,
    ));
  }
}
