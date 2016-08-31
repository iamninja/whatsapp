declare module 'api/models' {
  interface Chat {
    _id?: string;
    title?: string;
    picture?: string;
    lastMessage?: Message;
    lastMessageComp?: Tracker.Computation;
  }

  interface Message {
    _id?: string;
    chatId?: string;
    content?: string;
    createdAt?: Date;
  }
}
