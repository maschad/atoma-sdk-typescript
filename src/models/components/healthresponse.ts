/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HealthResponse = {
  /**
   * The status of the service
   */
  message: string;
};

/** @internal */
export const HealthResponse$inboundSchema: z.ZodType<
  HealthResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type HealthResponse$Outbound = {
  message: string;
};

/** @internal */
export const HealthResponse$outboundSchema: z.ZodType<
  HealthResponse$Outbound,
  z.ZodTypeDef,
  HealthResponse
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HealthResponse$ {
  /** @deprecated use `HealthResponse$inboundSchema` instead. */
  export const inboundSchema = HealthResponse$inboundSchema;
  /** @deprecated use `HealthResponse$outboundSchema` instead. */
  export const outboundSchema = HealthResponse$outboundSchema;
  /** @deprecated use `HealthResponse$Outbound` instead. */
  export type Outbound = HealthResponse$Outbound;
}

export function healthResponseToJSON(healthResponse: HealthResponse): string {
  return JSON.stringify(HealthResponse$outboundSchema.parse(healthResponse));
}

export function healthResponseFromJSON(
  jsonString: string,
): SafeParseResult<HealthResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HealthResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HealthResponse' from JSON`,
  );
}
