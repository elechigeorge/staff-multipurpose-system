const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')


const MemberSchema = new mongoose.Schema({
    personal_details: {
        staffID: {
            type: String,
            required: true,
            unique: true
        },

        gender: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        other_name: {
            type: String
        },
        email: {
            type: String
        },
        department: {
            type: String,
        },
        staff_group: {
            type: String
        }
    },

    contact_details: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        telephone: {
            type: String,
            required: true
        }


    },
    next_of_kin: {
        full_name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        relationship: {
            type: String,
            required: true
        }
    },
    contributions: {
        savings: {
            type: String,
            required: true
        },
        min_saving: {
            type: String,
            default: "10,000"
        }
    }


});

MemberSchema.plugins(timestamp)



const Members = mongoose.model("Membership", MemberSchema)

module.exports = Members;