import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import bcrypt from 'bcryptjs'


const MemberSchema = new mongoose.Schema({
    password: {
        type: String
    },
    email: {
        type: String
    },
    staffID: {
        type: String,
        required: true,
        unique: true
    },
    personal_details: {
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

        department: {
            type: String,
        },
        staff_group: {
            type: String
        }

    },

    contact_details: {
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        telephone: {
            type: String
        }


    },
    next_of_kin: {
        full_name: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        relationship: {
            type: String
        }
    },
    contributions: {
        savings: {
            type: String
        },
        min_saving: {
            type: String,
            default: "10,000"
        }
    }


});

MemberSchema.plugin(timestamp)

MemberSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

MemberSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Members = mongoose.model("Membership", MemberSchema)

export default Members