const express = require("express");
const multer = require("multer");
const path = require("path");
const { create, getAll, getOne, update, remove } = require("../../controllers/lead/customerDocumentController");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const customPath = req.body.customPath || path.join(__dirname, "../../uploads");
    cb(null, customPath); 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

const upload = multer({ storage });

router.post(
  "/customer-documents",
  upload.fields([
    { name: "loanAgreements", maxCount: 10 },
    { name: "creditFiles", maxCount: 10 },
    { name: "rentHousingLoans", maxCount: 10 },
    { name: "wageSlips", maxCount: 10 },
  ]),
  create
);

router.get("/customer-documents", getAll);
router.get("/customer-documents/:id", getOne);
router.put(
  "/customer-documents/:id",
  upload.fields([
    { name: "loanAgreements", maxCount: 10 },
    { name: "creditFiles", maxCount: 10 },
    { name: "rentHousingLoans", maxCount: 10 },
    { name: "wageSlips", maxCount: 10 },
  ]),
  update
);
router.delete("/customer-documents/:id", remove);

module.exports = router;
