/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Chat } from "./chat.js";
import { ConfidentialChat } from "./confidentialchat.js";
import { ConfidentialEmbeddings } from "./confidentialembeddings.js";
import { ConfidentialImages } from "./confidentialimages.js";
import { Embeddings } from "./embeddings.js";
import { Health } from "./health.js";
import { Images } from "./images.js";
import { Models } from "./models.js";
import { Nodes } from "./nodes.js";

export class AtomaSDK extends ClientSDK {
  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _confidentialChat?: ConfidentialChat;
  get confidentialChat(): ConfidentialChat {
    return (this._confidentialChat ??= new ConfidentialChat(this._options));
  }

  private _confidentialEmbeddings?: ConfidentialEmbeddings;
  get confidentialEmbeddings(): ConfidentialEmbeddings {
    return (this._confidentialEmbeddings ??= new ConfidentialEmbeddings(
      this._options,
    ));
  }

  private _confidentialImages?: ConfidentialImages;
  get confidentialImages(): ConfidentialImages {
    return (this._confidentialImages ??= new ConfidentialImages(this._options));
  }

  private _embeddings?: Embeddings;
  get embeddings(): Embeddings {
    return (this._embeddings ??= new Embeddings(this._options));
  }

  private _health?: Health;
  get health(): Health {
    return (this._health ??= new Health(this._options));
  }

  private _images?: Images;
  get images(): Images {
    return (this._images ??= new Images(this._options));
  }

  private _models?: Models;
  get models(): Models {
    return (this._models ??= new Models(this._options));
  }

  private _nodes?: Nodes;
  get nodes(): Nodes {
    return (this._nodes ??= new Nodes(this._options));
  }
}
