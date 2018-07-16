import { Router } from 'express';
import * as controllers from '../../controllers';

const router = Router();

router.post('/create', controllers.createBook);
router.get('/', controllers.getBooks);
router.get('/:id', controllers.getBook);
router.put('/:id', controllers.updateBook);
router.delete('/:id', controllers.deleteBook);

export { router };
