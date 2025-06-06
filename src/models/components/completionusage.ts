/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PromptTokensDetails,
  PromptTokensDetails$inboundSchema,
  PromptTokensDetails$Outbound,
  PromptTokensDetails$outboundSchema,
} from "./prompttokensdetails.js";

/**
 * Represents the completion usage.
 *
 * @remarks
 *
 * This is used to represent the completion usage in the chat completion request.
 * It can be either a completion usage or a completion chunk usage.
 */
export type CompletionUsage = {
  /**
   * Number of tokens in the completion.
   */
  completionTokens: number;
  /**
   * Number of tokens in the prompt.
   */
  promptTokens: number;
  promptTokensDetails?: PromptTokensDetails | null | undefined;
  /**
   * Total number of tokens used (prompt + completion).
   */
  totalTokens: number;
};

/** @internal */
export const CompletionUsage$inboundSchema: z.ZodType<
  CompletionUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  completion_tokens: z.number().int(),
  prompt_tokens: z.number().int(),
  prompt_tokens_details: z.nullable(PromptTokensDetails$inboundSchema)
    .optional(),
  total_tokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "completion_tokens": "completionTokens",
    "prompt_tokens": "promptTokens",
    "prompt_tokens_details": "promptTokensDetails",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type CompletionUsage$Outbound = {
  completion_tokens: number;
  prompt_tokens: number;
  prompt_tokens_details?: PromptTokensDetails$Outbound | null | undefined;
  total_tokens: number;
};

/** @internal */
export const CompletionUsage$outboundSchema: z.ZodType<
  CompletionUsage$Outbound,
  z.ZodTypeDef,
  CompletionUsage
> = z.object({
  completionTokens: z.number().int(),
  promptTokens: z.number().int(),
  promptTokensDetails: z.nullable(PromptTokensDetails$outboundSchema)
    .optional(),
  totalTokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    completionTokens: "completion_tokens",
    promptTokens: "prompt_tokens",
    promptTokensDetails: "prompt_tokens_details",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionUsage$ {
  /** @deprecated use `CompletionUsage$inboundSchema` instead. */
  export const inboundSchema = CompletionUsage$inboundSchema;
  /** @deprecated use `CompletionUsage$outboundSchema` instead. */
  export const outboundSchema = CompletionUsage$outboundSchema;
  /** @deprecated use `CompletionUsage$Outbound` instead. */
  export type Outbound = CompletionUsage$Outbound;
}

export function completionUsageToJSON(
  completionUsage: CompletionUsage,
): string {
  return JSON.stringify(CompletionUsage$outboundSchema.parse(completionUsage));
}

export function completionUsageFromJSON(
  jsonString: string,
): SafeParseResult<CompletionUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionUsage' from JSON`,
  );
}
