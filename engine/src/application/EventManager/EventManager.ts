import { Memory } from '../ContextManager/Memory';

export type ClientType = {
  userId: string;
  botID: string;
  channelId: string;
};

export type ContextType = {
  stepId: string;
  flowId: string;
  memory: Memory;
};

export type ConversationInfoType = {
  requestId: string;
  conversationId: string;
  callbackUrl: string;
  metadata: any;
  context: ContextType;
  client: ClientType;
};

export const initConversation = (event: any, request: any, bot: any) => {
  const conversationInfo = {
    requestId: request.id,
    conversationId: null,
    callbackUrl: request.callback_url,
		metadata: request.metadata,
  };
};

export const getOrCreateConversation = () => {};

export const createConversation = () => {};