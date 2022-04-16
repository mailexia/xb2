import app from '../app';
import * as postController from './post.controller';
import express from 'express';

const router = express.Router();
router.get('/posts', postController.index);

export default router;
