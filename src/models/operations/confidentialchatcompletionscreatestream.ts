/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Chat completions
 */
export type ConfidentialChatCompletionsCreateStreamResponseBody = {
  /**
   * Represents a response from a confidential compute request
   */
  data: components.ConfidentialComputeStreamResponse;
};

/** @internal */
export const ConfidentialChatCompletionsCreateStreamResponseBody$inboundSchema:
  z.ZodType<
    ConfidentialChatCompletionsCreateStreamResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: z.string().transform((v, ctx) => {
      try {
        return JSON.parse(v);
      } catch (err) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `malformed json: ${err}`,
        });
        return z.NEVER;
      }
    }).pipe(components.ConfidentialComputeStreamResponse$inboundSchema),
  });

/** @internal */
export type ConfidentialChatCompletionsCreateStreamResponseBody$Outbound = {
  data: components.ConfidentialComputeStreamResponse$Outbound;
};

/** @internal */
export const ConfidentialChatCompletionsCreateStreamResponseBody$outboundSchema:
  z.ZodType<
    ConfidentialChatCompletionsCreateStreamResponseBody$Outbound,
    z.ZodTypeDef,
    ConfidentialChatCompletionsCreateStreamResponseBody
  > = z.object({
    data: components.ConfidentialComputeStreamResponse$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfidentialChatCompletionsCreateStreamResponseBody$ {
  /** @deprecated use `ConfidentialChatCompletionsCreateStreamResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ConfidentialChatCompletionsCreateStreamResponseBody$inboundSchema;
  /** @deprecated use `ConfidentialChatCompletionsCreateStreamResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ConfidentialChatCompletionsCreateStreamResponseBody$outboundSchema;
  /** @deprecated use `ConfidentialChatCompletionsCreateStreamResponseBody$Outbound` instead. */
  export type Outbound =
    ConfidentialChatCompletionsCreateStreamResponseBody$Outbound;
}

export function confidentialChatCompletionsCreateStreamResponseBodyToJSON(
  confidentialChatCompletionsCreateStreamResponseBody:
    ConfidentialChatCompletionsCreateStreamResponseBody,
): string {
  return JSON.stringify(
    ConfidentialChatCompletionsCreateStreamResponseBody$outboundSchema.parse(
      confidentialChatCompletionsCreateStreamResponseBody,
    ),
  );
}

export function confidentialChatCompletionsCreateStreamResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ConfidentialChatCompletionsCreateStreamResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ConfidentialChatCompletionsCreateStreamResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ConfidentialChatCompletionsCreateStreamResponseBody' from JSON`,
  );
}
