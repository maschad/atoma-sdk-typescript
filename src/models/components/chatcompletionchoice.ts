/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatCompletionMessage,
  ChatCompletionMessage$inboundSchema,
  ChatCompletionMessage$Outbound,
  ChatCompletionMessage$outboundSchema,
} from "./chatcompletionmessage.js";

export type ChatCompletionChoice = {
  /**
   * The reason the chat completion was finished.
   */
  finishReason?: string | null | undefined;
  /**
   * The index of this choice in the list of choices.
   */
  index: number;
  /**
   * Log probability information for the choice, if applicable.
   */
  logprobs?: any | undefined;
  message: ChatCompletionMessage;
};

/** @internal */
export const ChatCompletionChoice$inboundSchema: z.ZodType<
  ChatCompletionChoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  finish_reason: z.nullable(z.string()).optional(),
  index: z.number().int(),
  logprobs: z.any().optional(),
  message: ChatCompletionMessage$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "finish_reason": "finishReason",
  });
});

/** @internal */
export type ChatCompletionChoice$Outbound = {
  finish_reason?: string | null | undefined;
  index: number;
  logprobs?: any | undefined;
  message: ChatCompletionMessage$Outbound;
};

/** @internal */
export const ChatCompletionChoice$outboundSchema: z.ZodType<
  ChatCompletionChoice$Outbound,
  z.ZodTypeDef,
  ChatCompletionChoice
> = z.object({
  finishReason: z.nullable(z.string()).optional(),
  index: z.number().int(),
  logprobs: z.any().optional(),
  message: ChatCompletionMessage$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    finishReason: "finish_reason",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionChoice$ {
  /** @deprecated use `ChatCompletionChoice$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionChoice$inboundSchema;
  /** @deprecated use `ChatCompletionChoice$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionChoice$outboundSchema;
  /** @deprecated use `ChatCompletionChoice$Outbound` instead. */
  export type Outbound = ChatCompletionChoice$Outbound;
}

export function chatCompletionChoiceToJSON(
  chatCompletionChoice: ChatCompletionChoice,
): string {
  return JSON.stringify(
    ChatCompletionChoice$outboundSchema.parse(chatCompletionChoice),
  );
}

export function chatCompletionChoiceFromJSON(
  jsonString: string,
): SafeParseResult<ChatCompletionChoice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatCompletionChoice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatCompletionChoice' from JSON`,
  );
}
