import * as Moment from 'moment';
import { Component } from '@angular/core';
import { CalendarPipe } from 'angular2-moment';
import { Chat } from 'api/models';


@Component({
  templateUrl: 'build/pages/chats/chats.html',
  pipes: [CalendarPipe]
})
export class ChatsPage {
  chats: Chat[];

  constructor() {
    this.chats = this.findChats();
  }

  private findChats(): Chat[] {
    return [
      {
        _id: '0',
        title: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: Moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: '1',
        title: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: Moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: '2',
        title: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: Moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: '3',
        title: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          createdAt: Moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: '4',
        title: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'This is wicked good ice cream.',
          createdAt: Moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }

  removeChat(chat: Chat): void {
    const index = this.chats.indexOf(chat);
    this.chats.splice(index, 1);
  }
}
