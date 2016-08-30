declare module 'api/models' {
  interface Chat {
    _id?: string;
    title?: string;
    picture?: string;
    lastMessage?: Message;
  }

  interface Message {
    _id?: string;
    content?: string;
    createdAt?: Date;
  }
}
