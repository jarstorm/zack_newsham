import { Message } from '../imports/api/message.js';


Meteor.publish("allMessages", function() {
    return Message.find({});
})
