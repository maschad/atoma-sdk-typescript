# Atoma's Typescript SDK

[![Discord](https://img.shields.io/discord/1172593757586214964?label=Discord&logo=discord&logoColor=white)](https://discord.gg/QvcSZGKM)
[![Twitter](https://img.shields.io/twitter/follow/Atoma_Network?style=social)](https://x.com/Atoma_Network)
[![Documentation](https://img.shields.io/badge/docs-mintify-blue?logo=mintify)](https://docs.atoma.network)
[![License](https://img.shields.io/github/license/atoma-network/atoma-node)](LICENSE)

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *atoma-sdk* API.

<img src="https://github.com/atoma-network/atoma-node/blob/main/atoma-assets/atoma-banner.png" alt="Logo"/>


<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=atoma-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>



<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Atoma's Typescript SDK](#atomas-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm i atoma-sdk
```

### PNPM

```bash
pnpm add atoma-sdk
```

### Bun

```bash
bun add atoma-sdk
```

### Yarn

```bash
yarn add atoma-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "AtomaSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "atoma-sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "AtomaSDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "atoma-sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package atoma-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable   |
| ------------ | ---- | ----------- | ---------------------- |
| `bearerAuth` | http | HTTP Bearer | `ATOMASDK_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [chat](docs/sdks/chat/README.md)

* [create](docs/sdks/chat/README.md#create) - Create chat completions
* [createStream](docs/sdks/chat/README.md#createstream)

### [completions](docs/sdks/completions/README.md)

* [create](docs/sdks/completions/README.md#create) - Create completions
* [createStream](docs/sdks/completions/README.md#createstream)

### [confidentialChat](docs/sdks/confidentialchat/README.md)

* [create](docs/sdks/confidentialchat/README.md#create) - Create confidential chat completions
* [createStream](docs/sdks/confidentialchat/README.md#createstream)

### [confidentialCompletions](docs/sdks/confidentialcompletions/README.md)

* [create](docs/sdks/confidentialcompletions/README.md#create) - Create confidential completions
* [createStream](docs/sdks/confidentialcompletions/README.md#createstream)

### [confidentialEmbeddings](docs/sdks/confidentialembeddings/README.md)

* [create](docs/sdks/confidentialembeddings/README.md#create) - Create confidential embeddings

### [confidentialImages](docs/sdks/confidentialimages/README.md)

* [generate](docs/sdks/confidentialimages/README.md#generate) - Create confidential image

### [embeddings](docs/sdks/embeddings/README.md)

* [create](docs/sdks/embeddings/README.md#create) - Create embeddings

### [health](docs/sdks/health/README.md)

* [health](docs/sdks/health/README.md#health) - Health

### [images](docs/sdks/images/README.md)

* [generate](docs/sdks/images/README.md#generate) - Create image

### [models](docs/sdks/models/README.md)

* [modelsList](docs/sdks/models/README.md#modelslist) - List models
* [openRouterModelsList](docs/sdks/models/README.md#openroutermodelslist) - OpenRouter models listing endpoint

### [nodes](docs/sdks/nodes/README.md)

* [nodesCreate](docs/sdks/nodes/README.md#nodescreate) - Create node
* [nodesCreateLock](docs/sdks/nodes/README.md#nodescreatelock) - Create a node lock for confidential compute

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`chatCreate`](docs/sdks/chat/README.md#create) - Create chat completions
- [`chatCreateStream`](docs/sdks/chat/README.md#createstream)
- [`completionsCreate`](docs/sdks/completions/README.md#create) - Create completions
- [`completionsCreateStream`](docs/sdks/completions/README.md#createstream)
- [`confidentialChatCreate`](docs/sdks/confidentialchat/README.md#create) - Create confidential chat completions
- [`confidentialChatCreateStream`](docs/sdks/confidentialchat/README.md#createstream)
- [`confidentialCompletionsCreate`](docs/sdks/confidentialcompletions/README.md#create) - Create confidential completions
- [`confidentialCompletionsCreateStream`](docs/sdks/confidentialcompletions/README.md#createstream)
- [`confidentialEmbeddingsCreate`](docs/sdks/confidentialembeddings/README.md#create) - Create confidential embeddings
- [`confidentialImagesGenerate`](docs/sdks/confidentialimages/README.md#generate) - Create confidential image
- [`embeddingsCreate`](docs/sdks/embeddings/README.md#create) - Create embeddings
- [`healthHealth`](docs/sdks/health/README.md#health) - Health
- [`imagesGenerate`](docs/sdks/images/README.md#generate) - Create image
- [`modelsModelsList`](docs/sdks/models/README.md#modelslist) - List models
- [`modelsOpenRouterModelsList`](docs/sdks/models/README.md#openroutermodelslist) - OpenRouter models listing endpoint
- [`nodesNodesCreate`](docs/sdks/nodes/README.md#nodescreate) - Create node
- [`nodesNodesCreateLock`](docs/sdks/nodes/README.md#nodescreatelock) - Create a node lock for confidential compute

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.createStream({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: "<value>",
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { AtomaSDK } from "atoma-sdk";
import { SDKValidationError } from "atoma-sdk/models/errors";

const atomaSDK = new AtomaSDK({
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await atomaSDK.completions.create({
      frequencyPenalty: 0,
      logitBias: {
        "1234567890": 0.5,
        "1234567891": -0.5,
      },
      logprobs: 1,
      model: "meta-llama/Llama-3.3-70B-Instruct",
      n: 1,
      presencePenalty: 0,
      prompt: [
        "Hello!",
      ],
      seed: 123,
      stop: [
        "json([\"stop\", \"halt\"])",
      ],
      stream: false,
      suffix: "json(\"\n\")",
      temperature: 0.7,
      topP: 1,
      user: "user-1234",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof APIError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { AtomaSDK } from "atoma-sdk";

const atomaSDK = new AtomaSDK({
  serverURL: "https://api.atoma.network",
  bearerAuth: process.env["ATOMASDK_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await atomaSDK.completions.create({
    frequencyPenalty: 0,
    logitBias: {
      "1234567890": 0.5,
      "1234567891": -0.5,
    },
    logprobs: 1,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    n: 1,
    presencePenalty: 0,
    prompt: [
      "Hello!",
    ],
    seed: 123,
    stop: [
      "json([\"stop\", \"halt\"])",
    ],
    stream: false,
    suffix: "json(\"\n\")",
    temperature: 0.7,
    topP: 1,
    user: "user-1234",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { AtomaSDK } from "atoma-sdk";
import { HTTPClient } from "atoma-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new AtomaSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AtomaSDK } from "atoma-sdk";

const sdk = new AtomaSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ATOMASDK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=atoma-sdk&utm_campaign=typescript)
