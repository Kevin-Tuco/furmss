const { Schema, SchemaTypes, model } = require('mongoose');

const forum1Schema = new Schema({
    userPost: {
        type: SchemaTypes.String
    },
    course: {
        type: SchemaTypes.String
    },
    content: {
        type: SchemaTypes.String
    },
    postDate: {
        type: SchemaTypes.Date
    },
    postName: {
        type: SchemaTypes.String
    }
})

const Forum1 = model("profToPick2", forum1Schema, "profToPick2");

module.exports = Forum1;
