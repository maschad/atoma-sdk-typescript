/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "./dlv.js";

import * as z from "zod";

export interface Env {
  ATOMASDK_BEARER_AUTH?: string | undefined;

  ATOMASDK_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z.object({
  ATOMASDK_BEARER_AUTH: z.string().optional(),

  ATOMASDK_DEBUG: z.coerce.boolean().optional(),
});

let envMemo: Env | undefined = undefined;
/**
 * Reads and validates environment variables.
 */
export function env(): Env {
  if (envMemo) {
    return envMemo;
  }

  envMemo = envSchema.parse(
    dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {},
  );
  return envMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
  envMemo = undefined;
}
