const { Schema, SchemaTypes, model } = require('mongoose');


const userSchema = new Schema({
    full_name: {
        type: SchemaTypes.String
    },
    id_num: {
        type: SchemaTypes.Number
    },
    degProgram: {
        type: SchemaTypes.String,
        default: null
    },
    college: {
        type: SchemaTypes.String,
        default: null
    },
    birthdate: {
        type: SchemaTypes.Date,
        default: null
    },
    email: {
        type: SchemaTypes.String
    },
    password: {
        type: SchemaTypes.String,
        required: true
    },
    dp: {
        type: SchemaTypes.String,
        default: null
    },
    pronouns: {
        type: SchemaTypes.String,
        default: null
    },
    hobbies: {
        type: SchemaTypes.String,
        default: null
    }

})

const User = model("users2", userSchema, "users2");

module.exports = User;