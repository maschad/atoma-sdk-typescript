/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { modelsModelsList } from "../../funcs/modelsModelsList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$modelsModelsList: ToolDefinition = {
  name: "models-models-list",
  description: `List models

This endpoint mimics the OpenAI models endpoint format, returning a list of
available models with their associated metadata. Each model includes standard
OpenAI-compatible fields to ensure compatibility with existing OpenAI client libraries.`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await modelsModelsList(
      client,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
