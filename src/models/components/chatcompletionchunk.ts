/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChatCompletionChunkChoice,
  ChatCompletionChunkChoice$inboundSchema,
  ChatCompletionChunkChoice$Outbound,
  ChatCompletionChunkChoice$outboundSchema,
} from "./chatcompletionchunkchoice.js";
import {
  CompletionUsage,
  CompletionUsage$inboundSchema,
  CompletionUsage$Outbound,
  CompletionUsage$outboundSchema,
} from "./completionusage.js";

/**
 * Represents the chat completion chunk.
 *
 * @remarks
 *
 * This is used to represent the chat completion chunk in the chat completion request.
 * It can be either a chat completion chunk or a chat completion chunk choice.
 */
export type ChatCompletionChunk = {
  /**
   * A list of chat completion chunk choices.
   */
  choices: Array<ChatCompletionChunkChoice>;
  /**
   * The Unix timestamp (in seconds) of when the chunk was created.
   */
  created: number;
  /**
   * A unique identifier for the chat completion chunk.
   */
  id: string;
  /**
   * The model used for the chat completion.
   */
  model: string;
  /**
   * The object of the chat completion chunk (which is always `chat.completion.chunk`)
   */
  object: string;
  usage?: CompletionUsage | null | undefined;
};

/** @internal */
export const ChatCompletionChunk$inboundSchema: z.ZodType<
  ChatCompletionChunk,
  z.ZodTypeDef,
  unknown
> = z.object({
  choices: z.array(ChatCompletionChunkChoice$inboundSchema),
  created: z.number().int(),
  id: z.string(),
  model: z.string(),
  object: z.string(),
  usage: z.nullable(CompletionUsage$inboundSchema).optional(),
});

/** @internal */
export type ChatCompletionChunk$Outbound = {
  choices: Array<ChatCompletionChunkChoice$Outbound>;
  created: number;
  id: string;
  model: string;
  object: string;
  usage?: CompletionUsage$Outbound | null | undefined;
};

/** @internal */
export const ChatCompletionChunk$outboundSchema: z.ZodType<
  ChatCompletionChunk$Outbound,
  z.ZodTypeDef,
  ChatCompletionChunk
> = z.object({
  choices: z.array(ChatCompletionChunkChoice$outboundSchema),
  created: z.number().int(),
  id: z.string(),
  model: z.string(),
  object: z.string(),
  usage: z.nullable(CompletionUsage$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionChunk$ {
  /** @deprecated use `ChatCompletionChunk$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionChunk$inboundSchema;
  /** @deprecated use `ChatCompletionChunk$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionChunk$outboundSchema;
  /** @deprecated use `ChatCompletionChunk$Outbound` instead. */
  export type Outbound = ChatCompletionChunk$Outbound;
}

export function chatCompletionChunkToJSON(
  chatCompletionChunk: ChatCompletionChunk,
): string {
  return JSON.stringify(
    ChatCompletionChunk$outboundSchema.parse(chatCompletionChunk),
  );
}

export function chatCompletionChunkFromJSON(
  jsonString: string,
): SafeParseResult<ChatCompletionChunk, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatCompletionChunk$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatCompletionChunk' from JSON`,
  );
}
