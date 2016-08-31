import { Component } from '@angular/core';
import { CalendarPipe } from 'angular2-moment';
import { MeteorComponent } from 'angular2-meteor';
import { Mongo } from 'meteor/mongo';
import { Chats, Messages } from 'api/collections';
import { Chat, Message } from 'api/models';


@Component({
  templateUrl: 'build/pages/chats/chats.html',
  pipes: [CalendarPipe]
})
export class ChatsPage extends MeteorComponent {
  chats: Mongo.Cursor<Chat>;

  constructor() {
    super();

    this.autorun(() => {
      this.chats = this.findChats();
    });
  }

  private findChats(): Mongo.Cursor<Chat> {
    const chats = Chats.find({}, {
      transform: this.transformChat.bind(this)
    });

    chats.observe({
      changed: (newChat, oldChat) => this.disposeChat(oldChat),
      removed: (chat) => this.disposeChat(chat)
    });

    return chats;
  }

  private transformChat(chat): Chat {
    chat.lastMessageComp = this.autorun(() => {
      chat.lastMessage = this.findLastMessage(chat);
    });

    return chat;
  }

  private findLastMessage(chat): Message {
    return Messages.findOne({
      chatId: chat._id
    }, {
      sort: {createdAt: -1}
    });
  }

  private disposeChat(chat): void {
    if (chat.lastMessageComp) {
      chat.lastMessageComp.stop();
    }
  }
}
