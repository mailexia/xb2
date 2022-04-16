import express, { Request, Response } from 'express';
import app from './app';
import { APP_PORT } from './app/app.config';

app.listen(APP_PORT, () => {
  console.log('app started');
});
