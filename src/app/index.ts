import express, { Request, Response } from 'express';
import postRouter from '../post/post.router';
const app = express();
app.use(express.json());
app.use(postRouter);
export default app;
