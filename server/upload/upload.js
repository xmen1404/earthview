const multer = require('multer');
// import {apiUrl} from '../../contexts/constants';

console.log("in here");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

module.exports = upload;