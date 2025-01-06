/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ImageData,
  ImageData$inboundSchema,
  ImageData$Outbound,
  ImageData$outboundSchema,
} from "./imagedata.js";

/**
 * Response format for image generation
 */
export type CreateImageResponse = {
  created: number;
  data: Array<ImageData>;
};

/** @internal */
export const CreateImageResponse$inboundSchema: z.ZodType<
  CreateImageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  created: z.number().int(),
  data: z.array(ImageData$inboundSchema),
});

/** @internal */
export type CreateImageResponse$Outbound = {
  created: number;
  data: Array<ImageData$Outbound>;
};

/** @internal */
export const CreateImageResponse$outboundSchema: z.ZodType<
  CreateImageResponse$Outbound,
  z.ZodTypeDef,
  CreateImageResponse
> = z.object({
  created: z.number().int(),
  data: z.array(ImageData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateImageResponse$ {
  /** @deprecated use `CreateImageResponse$inboundSchema` instead. */
  export const inboundSchema = CreateImageResponse$inboundSchema;
  /** @deprecated use `CreateImageResponse$outboundSchema` instead. */
  export const outboundSchema = CreateImageResponse$outboundSchema;
  /** @deprecated use `CreateImageResponse$Outbound` instead. */
  export type Outbound = CreateImageResponse$Outbound;
}

export function createImageResponseToJSON(
  createImageResponse: CreateImageResponse,
): string {
  return JSON.stringify(
    CreateImageResponse$outboundSchema.parse(createImageResponse),
  );
}

export function createImageResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateImageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateImageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateImageResponse' from JSON`,
  );
}
