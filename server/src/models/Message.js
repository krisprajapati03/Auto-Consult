import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

export const Message = mongoose.model("Message", messageSchema);
