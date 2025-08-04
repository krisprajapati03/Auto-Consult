import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export const Color = mongoose.model("Color", colorSchema);
