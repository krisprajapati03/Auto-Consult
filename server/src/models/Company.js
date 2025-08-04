import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: { type: Date, default: Date.now },
});

export const Company = mongoose.model("Company", companySchema);
