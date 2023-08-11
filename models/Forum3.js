const { Schema, SchemaTypes, model } = require('mongoose');

const forum3Schema = new Schema({
    userPost: {
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

const Forum3 = model("studyHelp", forum3Schema, "studyHelp");

module.exports = Forum3;