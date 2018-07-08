import { Router } from 'express';
import * as controllers from '../../controllers';

const router = Router();

router.get('/', controllers.getBooks);
router.get('/:id', controllers.getBook);

export { router };
