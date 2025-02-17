import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./uploads/")
    },
    filename: function (req, file, cb) {
      const fname =  new Date().toISOString().replace(/:/g, '_') + file.originalname;
      cb(null, fname);
    }
  })
  
  const upload = multer({ storage: storage });

  export default upload;