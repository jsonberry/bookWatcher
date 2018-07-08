import { Router } from 'express';
import { router as books } from './books.route';

const api = Router();

api.use('/books', books);

export { api };
