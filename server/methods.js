import { Message } from '../imports/api/message.js';

Meteor.methods({

    deleteMessage(message_id) {
        Message.remove(message_id);
    }

});
