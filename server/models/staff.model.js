import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    availability:{
         type:Object,
         required:true
    }
});

export const staff = mongoose.model("Staff", staffSchema);