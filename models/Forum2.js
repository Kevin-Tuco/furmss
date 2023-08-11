const { Schema, SchemaTypes, model } = require('mongoose');

const forum2Schema = new Schema({
    userPost: {
        type: SchemaTypes.String
    },
    course: {
        type: SchemaTypes.String
    },
    location: {
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

const Forum2 = model("tutorSession", forum2Schema, "tutorSession");

module.exports = Forum2;