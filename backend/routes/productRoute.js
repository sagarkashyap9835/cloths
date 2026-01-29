
import express from "express";
import { addRoom, getRooms, updateRoom, deleteRoom } from "../controllers/productController.js";
import { authAdmin } from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

const uploadFields = upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'aadhaarImage', maxCount: 1 }
]);

router.post("/add", authAdmin, uploadFields, addRoom);
router.get("/all", getRooms);
router.put("/update/:id", authAdmin, uploadFields, updateRoom);
router.delete("/delete/:id", authAdmin, deleteRoom);

// New Verification Route
import { verifyRoom } from "../controllers/productController.js";
router.put("/verify/:id", authAdmin, verifyRoom);

export default router;

