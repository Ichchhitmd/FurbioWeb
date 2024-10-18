import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerOptions = (uploadType: string) => {
  return {
    storage: diskStorage({
      destination: (req, file, cb) => {
        let uploadPath = './uploads';
        if (uploadType === 'products') {
          uploadPath = './uploads/products';
        } else if (uploadType === 'blogs') {
          uploadPath = './uploads/blogs';
        }
        cb(null, uploadPath);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
      }
      cb(null, true);
    },
  };
};
