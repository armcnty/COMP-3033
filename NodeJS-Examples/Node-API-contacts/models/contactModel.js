const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: [true, "Please enter a first name"]
        },
        lastname: {
            type: String,
            required: [true, "Please enter a last name"]
        },
        email: {
            type: String,
            required: false,
            default: "NULL"
        },
        added: {
            type: Date,
            required: false,
            default: () => Date.now("<YYYY-mm-dd HH:MM:ss>")
        }
    }
)

const Contact = mongoose.model('Contact', contactSchema, 'myContacts');
module.exports = Contact;
