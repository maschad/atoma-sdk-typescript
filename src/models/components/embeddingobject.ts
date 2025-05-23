/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Individual embedding object in the response
 */
export type EmbeddingObject = {
  /**
   * The embedding vector
   */
  embedding: Array<number>;
  /**
   * Index of the embedding in the list of embeddings
   */
  index: number;
  /**
   * The object type, which is always "embedding"
   */
  object: string;
};

/** @internal */
export const EmbeddingObject$inboundSchema: z.ZodType<
  EmbeddingObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  embedding: z.array(z.number()),
  index: z.number().int(),
  object: z.string(),
});

/** @internal */
export type EmbeddingObject$Outbound = {
  embedding: Array<number>;
  index: number;
  object: string;
};

/** @internal */
export const EmbeddingObject$outboundSchema: z.ZodType<
  EmbeddingObject$Outbound,
  z.ZodTypeDef,
  EmbeddingObject
> = z.object({
  embedding: z.array(z.number()),
  index: z.number().int(),
  object: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmbeddingObject$ {
  /** @deprecated use `EmbeddingObject$inboundSchema` instead. */
  export const inboundSchema = EmbeddingObject$inboundSchema;
  /** @deprecated use `EmbeddingObject$outboundSchema` instead. */
  export const outboundSchema = EmbeddingObject$outboundSchema;
  /** @deprecated use `EmbeddingObject$Outbound` instead. */
  export type Outbound = EmbeddingObject$Outbound;
}

export function embeddingObjectToJSON(
  embeddingObject: EmbeddingObject,
): string {
  return JSON.stringify(EmbeddingObject$outboundSchema.parse(embeddingObject));
}

export function embeddingObjectFromJSON(
  jsonString: string,
): SafeParseResult<EmbeddingObject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmbeddingObject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmbeddingObject' from JSON`,
  );
}
