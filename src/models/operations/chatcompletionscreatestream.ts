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
export type ChatCompletionsCreateStreamResponseBody = {
  /**
   * Represents the chat completion chunk.
   *
   * @remarks
   *
   * This is used to represent the chat completion chunk in the chat completion request.
   * It can be either a chat completion chunk or a chat completion chunk choice.
   */
  data: components.ChatCompletionChunk;
};

/** @internal */
export const ChatCompletionsCreateStreamResponseBody$inboundSchema: z.ZodType<
  ChatCompletionsCreateStreamResponseBody,
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
  }).pipe(components.ChatCompletionChunk$inboundSchema),
});

/** @internal */
export type ChatCompletionsCreateStreamResponseBody$Outbound = {
  data: components.ChatCompletionChunk$Outbound;
};

/** @internal */
export const ChatCompletionsCreateStreamResponseBody$outboundSchema: z.ZodType<
  ChatCompletionsCreateStreamResponseBody$Outbound,
  z.ZodTypeDef,
  ChatCompletionsCreateStreamResponseBody
> = z.object({
  data: components.ChatCompletionChunk$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionsCreateStreamResponseBody$ {
  /** @deprecated use `ChatCompletionsCreateStreamResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionsCreateStreamResponseBody$inboundSchema;
  /** @deprecated use `ChatCompletionsCreateStreamResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionsCreateStreamResponseBody$outboundSchema;
  /** @deprecated use `ChatCompletionsCreateStreamResponseBody$Outbound` instead. */
  export type Outbound = ChatCompletionsCreateStreamResponseBody$Outbound;
}

export function chatCompletionsCreateStreamResponseBodyToJSON(
  chatCompletionsCreateStreamResponseBody:
    ChatCompletionsCreateStreamResponseBody,
): string {
  return JSON.stringify(
    ChatCompletionsCreateStreamResponseBody$outboundSchema.parse(
      chatCompletionsCreateStreamResponseBody,
    ),
  );
}

export function chatCompletionsCreateStreamResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ChatCompletionsCreateStreamResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ChatCompletionsCreateStreamResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ChatCompletionsCreateStreamResponseBody' from JSON`,
  );
}
