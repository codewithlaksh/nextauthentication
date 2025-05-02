import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String
    },
    profile: [
        {
            address: { type: String }
        },
        {
            phone: { type: String }
        }
    ],
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String
    },
    verifyTokenExpiry: {
        type: Date
    }
}, { timestamps: true });

mongoose.models = {};
const UserModel = mongoose.model('User', UserSchema);

export { UserModel };
