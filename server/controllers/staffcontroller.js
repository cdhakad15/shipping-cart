import { trusted } from "mongoose";
import { staff } from "../models/staff.model.js";

export const createStaff = async(req, res)=>{
    try{
      const{name,availability}= req.body;
      const newStaff =  new staff({name,availability});
      await newStaff.save();

      res.status(201).json({messgae:"Staff Created sucessfully"});
    }
    catch(error){
       res.status(500).json({messgae:"Internal server error"});
    }
};


export const getStaffList =  async(req,res)=>{
    try {
        const staffList = await staff.find();
        res.status(200).json(staffList);
    } catch (error) {
        res.status(500).json({messgae:"Internal server error"});
    }
}

export const updateStaff = async (req,res)=>{
    try{  
       const id = req.params.id;
       const {name, availability}= req.body;
       const updateStaff = await staff.findByIdAndUpdate(id,{name,availability},{new:true});
       if(!updateStaff){
        return res.status(404).json({messgae:"User not found"});
       }
       res.status(200).json(updateStaff)
    }
    catch(error){
      res.staus(500).json({messgae:"Internal server error"})
    }
}



export const deleteStaff = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteStaff= await staff.findByIdAndDelete(id);
        if(!deleteStaff){
            return res.status(404).json({messgae:"Staff not found"})
        }
        res.status(200).json({message:"Staff deleted successfully"});
    } catch (error) {
        res.staus(500).json({messgae:"Internal server error"})
    }
}