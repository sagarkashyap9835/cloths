// import express from "express";
// import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
// import { authAdmin } from "../middlewares/authAdmin.js";
// import upload from "../middlewares/multer.js";

// const router = express.Router();

// // Admin can add product (with image)
// router.post("/add", authAdmin, upload.single("image"), addProduct);

// // Get all products
// router.get("/all", getProducts);

// // Admin can update product
// router.put("/update/:id", authAdmin, upload.single("image"), updateProduct);

// // Admin can delete product
// router.delete("/delete/:id", authAdmin, deleteProduct);

// export default router;

import express from "express";
import { addRoom, getRooms, updateRoom, deleteRoom } from "../controllers/productController.js";
import { authAdmin } from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/add", authAdmin, upload.array("images", 5), addRoom);
router.get("/all", getRooms);
router.put("/update/:id", authAdmin, upload.array("images", 5), updateRoom);
router.delete("/delete/:id", authAdmin, deleteRoom);

export default router;

