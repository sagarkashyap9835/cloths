
import express from "express";
import { addRoom, getRooms, updateRoom, deleteRoom, verifyRoom, getOwnerRooms } from "../controllers/productController.js";
import { authOwner, authAdmin } from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

const uploadFields = upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'aadhaarImage', maxCount: 1 }
]);

router.post("/add", authOwner, uploadFields, addRoom);
router.get("/all", getRooms);
router.get("/owner-rooms", authOwner, getOwnerRooms);
router.put("/update/:id", authOwner, uploadFields, updateRoom);
router.delete("/delete/:id", authOwner, deleteRoom);

// New Verification Route (Admin Only)
router.put("/verify/:id", authAdmin, verifyRoom);

export default router;

