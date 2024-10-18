// src/types/express/index.d.ts

import * as multer from 'multer';

declare global {
  namespace Express {
    interface Multer {
      File: multer.File; // Adding Multer File type
    }
  }
}
