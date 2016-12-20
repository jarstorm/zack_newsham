import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Message } from './message.js';

if (Meteor.isClient) {
    describe('Message', () => {
        describe('methods', () => {
            let messageId;

            beforeEach(() => {
                const messages = Message.find().fetch();
                for (var i = 0; i < messages.length; i++) {
                    Message.remove(messages[i]._id);
                }

                Message.insert({
                    text: 'test message 2',
                    posted: new Date()
                });
            });

            it('can insert a message from client', () => {
                Message.insert({
                    text: 'test message 2',
                    posted: new Date()
                });
                // Verify that the method does what we expected
                assert.equal(Message.find().count(), 2);
            });

            it('cannot delete a message from client', () => {

                Message.remove(messageId);

                // Verify that the method does what we expected
                assert.equal(Message.find().count(), 1);
            });

        });
    });
}

if (Meteor.isServer) {
    describe('Message', () => {
        describe('methods', () => {
            let messageId;

            beforeEach(() => {
                Message.remove({});

            });

            it('can delete a message through server', () => {
                messageId = Message.insert({
                    text: 'test message',
                    posted: new Date()
                });

                Meteor.call('deleteMessage', messageId);

                // Verify that the method does what we expected
                assert.equal(Message.find().count(), 0);
            });

        });
    });
}
