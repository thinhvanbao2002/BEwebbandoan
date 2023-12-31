import mongoose from "mongoose";

const userTokenSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "users"
        },
        token: {
            type: String,
            require: true
        }
    },
    {
        timestams: true,
    }
)

const UserToken = mongoose.model('usertokens', userTokenSchema);
export default UserToken;