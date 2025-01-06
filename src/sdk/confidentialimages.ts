/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { confidentialImagesGenerate } from "../funcs/confidentialImagesGenerate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ConfidentialImages extends ClientSDK {
  /**
   * Create confidential image
   *
   * @remarks
   * This handler processes image generation requests in a confidential manner, providing additional
   * encryption and security measures for sensitive data processing. It supports both streaming and
   * non-streaming responses while maintaining data confidentiality through AEAD encryption and TEE hardware,
   * for full private AI compute.
   */
  async generate(
    request: components.ConfidentialComputeRequest,
    options?: RequestOptions,
  ): Promise<components.ConfidentialComputeResponse> {
    return unwrapAsync(confidentialImagesGenerate(
      this,
      request,
      options,
    ));
  }
}
