import express from "express";
import { createStaff, deleteStaff, getStaffList, updateStaff } from "../controllers/staffcontroller.js";


const router = express.Router();

router.post("/create", createStaff);
router.get("/list",getStaffList);
router.put("/update/:id", updateStaff);
router.delete("/delete/:id",deleteStaff)

export default  router;
