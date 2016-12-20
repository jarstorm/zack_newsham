import { Message } from '../imports/api/message.js';

Template.messages_template.onCreated(function bodyOnCreated() {
    Meteor.subscribe('allMessages');
});

Template.messages_template.helpers({
    messages() {
        return Message.find({}, { sort: { posted: -1 } });
    },
});

Template.messages_template.events({

    'submit .new-message' (event) {

        // Prevent default browser form submit

        event.preventDefault();

        const target = event.target;
        const text = target.text.value;


        Message.insert({

            text,

            posted: new Date(), // current time

        });



        // Clear form

        target.text.value = '';

    },
    'click .delete_message' (event) {

        // Prevent default browser form submit

        event.preventDefault();

        const message_id = this._id;


        Meteor.call('deleteMessage', message_id);

    },

});
