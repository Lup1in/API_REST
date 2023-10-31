import multer from 'multer';
import { extname, resolve } from 'path';

const protection = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  Storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${protection}${extname(file.originalname)}`);
    },
  }),
};
