/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { AtomaSDK } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Chat Chat Completions Create", async () => {
  const testHttpClient = createTestHTTPClient("chat_completions_create");

  const atomaSDK = new AtomaSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "value",
  });

  const result = await atomaSDK.chat.create({
    frequencyPenalty: 0,
    functions: [
      {
        "description": "Get the current weather in a location",
        "name": "get_current_weather",
        "parameters": {
          "properties": {
            "location": {
              "description": "The location to get the weather for",
              "type": "string",
            },
          },
          "required": [
            "location",
          ],
          "type": "object",
        },
      },
    ],
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    maxCompletionTokens: 4096,
    messages: [
      {
        content: "You are a helpful AI assistant",
        name: "AI expert",
        role: "system",
      },
      {
        content: "Hello!",
        name: "John Doe",
        role: "user",
      },
      {
        content:
          "I'm here to help you with any questions you have. How can I assist you today?",
        name: "AI",
        role: "assistant",
      },
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    parallelToolCalls: true,
    presencePenalty: 0,
    seed: 123,
    serviceTier: "auto",
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    temperature: 0.7,
    tools: [
      {
        function: {
          description: "Get the current weather in a location",
          name: "get_current_weather",
          parameters: {
            "properties": {
              "location": {
                "description": "The location to get the weather for",
                "type": "string",
              },
            },
            "required": [
              "location",
            ],
            "type": "object",
          },
        },
        type: "function",
      },
    ],
    topLogprobs: 1,
    topP: 1,
    user: "user-1234",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    choices: [
      {
        finishReason: "stop",
        index: 0,
        message: {
          name: "John Doe",
          role: "user",
        },
      },
    ],
    created: 1677652288,
    id: "chatcmpl-123",
    model: "meta-llama/Llama-3.3-70B-Instruct",
    object: "chat.completion",
    serviceTier: "auto",
    systemFingerprint: "fp_44709d6fcb",
    usage: {
      completionTokens: 12,
      promptTokens: 9,
      promptTokensDetails: {
        audioTokens: 0,
        cachedTokens: 10,
      },
      totalTokens: 21,
    },
  });
});

it.skip("Chat Chat Completions Create Stream", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step chat_completions_create_stream.test referencing operation chat_completions_create_stream is not currently supported`]",
  );
});
