import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { updateUserAvatar } from '../controllers/userController.js';
import { uploadAvatar } from '../middleware/multer.js';

const router = Router();

router.patch(
  '/users/me/avatar',
  authenticate,
  uploadAvatar.single('photo'),
  updateUserAvatar,
);

// input type="file" name="photo"

export default router;
