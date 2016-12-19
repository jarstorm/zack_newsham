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
