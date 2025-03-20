import express from "express";
import cloudinary from "../config/cloudinary.js";
// import upload from "../middleware/multer.js";
import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage })
const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  console.log(`🚀 ${req.method} request for uploading an image file`);


  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }

    res.status(200).json({
      success: true,
      data: result
    });
  });
});

export default router;