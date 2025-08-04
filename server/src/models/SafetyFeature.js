import mongoose from "mongoose";

const safetyFeatureSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export const SafetyFeature = mongoose.model("SafetyFeature", safetyFeatureSchema);
