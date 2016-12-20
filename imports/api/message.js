import { Mongo } from 'meteor/mongo';

export const Message = new Mongo.Collection('message');

var Schemas = {};

Schemas.Message = new SimpleSchema({
    text: {
        type: String,
        label: "Text",
        max: 200
    },
    posted: {
        type: Date,
        label: "Posted date",
        optional: true
    }
});

Message.attachSchema(Schemas.Message);


Message.allow({
    insert: function(userId, doc) {
        return true;
    },

    update: function(userId, doc, fields, modifier) {
        return false;
    },
    remove: function(userId, docs) {
        return false;
    }
});
