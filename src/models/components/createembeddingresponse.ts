/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmbeddingObject,
  EmbeddingObject$inboundSchema,
  EmbeddingObject$Outbound,
  EmbeddingObject$outboundSchema,
} from "./embeddingobject.js";
import {
  EmbeddingUsage,
  EmbeddingUsage$inboundSchema,
  EmbeddingUsage$Outbound,
  EmbeddingUsage$outboundSchema,
} from "./embeddingusage.js";

/**
 * Response object from creating embeddings
 */
export type CreateEmbeddingResponse = {
  /**
   * List of embedding objects
   */
  data: Array<EmbeddingObject>;
  /**
   * The model used for generating embeddings
   */
  model: string;
  /**
   * The object type, which is always "list"
   */
  object: string;
  /**
   * Usage information for the embeddings request
   */
  usage: EmbeddingUsage;
};

/** @internal */
export const CreateEmbeddingResponse$inboundSchema: z.ZodType<
  CreateEmbeddingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(EmbeddingObject$inboundSchema),
  model: z.string(),
  object: z.string(),
  usage: EmbeddingUsage$inboundSchema,
});

/** @internal */
export type CreateEmbeddingResponse$Outbound = {
  data: Array<EmbeddingObject$Outbound>;
  model: string;
  object: string;
  usage: EmbeddingUsage$Outbound;
};

/** @internal */
export const CreateEmbeddingResponse$outboundSchema: z.ZodType<
  CreateEmbeddingResponse$Outbound,
  z.ZodTypeDef,
  CreateEmbeddingResponse
> = z.object({
  data: z.array(EmbeddingObject$outboundSchema),
  model: z.string(),
  object: z.string(),
  usage: EmbeddingUsage$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbeddingResponse$ {
  /** @deprecated use `CreateEmbeddingResponse$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingResponse$inboundSchema;
  /** @deprecated use `CreateEmbeddingResponse$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingResponse$outboundSchema;
  /** @deprecated use `CreateEmbeddingResponse$Outbound` instead. */
  export type Outbound = CreateEmbeddingResponse$Outbound;
}

export function createEmbeddingResponseToJSON(
  createEmbeddingResponse: CreateEmbeddingResponse,
): string {
  return JSON.stringify(
    CreateEmbeddingResponse$outboundSchema.parse(createEmbeddingResponse),
  );
}

export function createEmbeddingResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateEmbeddingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEmbeddingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEmbeddingResponse' from JSON`,
  );
}
