import { Message } from '../imports/api/message.js';

Template.messages_template.helpers({

    messages() {

        return Message.find({}, { sort: { date_posted: -1 } });

    },

});
