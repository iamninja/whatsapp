import * as Moment from 'moment';
import {Meteor} from 'meteor/meteor';
import {Chats, Messages} from './collections';


Meteor.startup(() => {
  if (Chats.find().count()) return;

  let chatId;

  chatId = Chats.insert({
    title: 'Ethan Gonzalez',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
  });

  Messages.insert({
    chatId: chatId,
    content: 'You on your way?',
    createdAt: Moment().subtract(1, 'hours').toDate()
  });

  chatId = Chats.insert({
    title: 'Bryan Wallace',
    picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
  });

  Messages.insert({
    chatId: chatId,
    content: 'Hey, it\'s me',
    createdAt: Moment().subtract(2, 'hours').toDate()
  });

  chatId = Chats.insert({
    title: 'Avery Stewart',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
  });

  Messages.insert({
    chatId: chatId,
    content: 'I should buy a boat',
    createdAt: Moment().subtract(1, 'days').toDate()
  });

  chatId = Chats.insert({
    title: 'Katie Peterson',
    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
  });

  Messages.insert({
    chatId: chatId,
    content: 'Look at my mukluks!',
    createdAt: Moment().subtract(4, 'days').toDate()
  });

  chatId = Chats.insert({
    title: 'Ray Edwards',
    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
  });

  Messages.insert({
    chatId: chatId,
    content: 'This is wicked good ice cream.',
    createdAt: Moment().subtract(2, 'weeks').toDate()
  });
});
