import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            require: true,
        },
        permission: {
            type: Number,
            require: true,
        }
    },
    {
        timestamps: true
    }
);

const Admin = mongoose.model('admins', adminSchema);
export default Admin;
