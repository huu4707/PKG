const multer = require("multer");

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png")
    return cb(new Error("Định dạng file không hợp lệ"));
  cb(null, true);
}

// const upload = multer({ storage, fileFilter, limits: { fileSize: 10240000 } });
const upload = multer({
  storage,
  fileFilter,
});

module.exports = {
  upload,
};
