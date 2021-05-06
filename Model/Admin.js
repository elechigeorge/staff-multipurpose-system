import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import bcrypt from 'bcryptjs'


const AdminSchema = new mongoose.Schema({
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    staffID: {
        type: String,
        required: true,
        unique: true
    }
});

AdminSchema.plugin(timestamp)

AdminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

AdminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const Admin = mongoose.model("Admin", AdminSchema)

export default Admin;