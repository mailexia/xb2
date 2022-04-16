import { NextFunction, Request, Response } from 'express';
import { postService } from './post.service';

export const index = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.send(postService());
};
