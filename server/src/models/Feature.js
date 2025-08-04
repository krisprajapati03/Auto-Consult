import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export const Feature = mongoose.model("Feature", featureSchema);
