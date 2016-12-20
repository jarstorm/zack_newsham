import { assert } from 'meteor/practicalmeteor:chai';

import { Message } from '../imports/api/message.js';

describe('Messages order', () => {
    describe('view', () => {
        let messageId;

        beforeEach(() => {
            const messages = Message.find().fetch();
            for (var i = 0; i < messages.length; i++) {
                Message.remove(messages[i]._id);
            }

            Message.insert({
                text: 'test message 1',
                posted: new Date()
            });

            Message.insert({
                text: 'test message 2',
                posted: new Date()
            });
        });

        it('There are two ordered messages', () => {
            var messages = Template.messages_template.__helpers.get('messages').call().fetch();

            // Verify that the method does what we expected
            assert.equal(messages.length, 2);
            assert.isTrue(messages[0].posted > messages[1].posted);
        });

    });
});
