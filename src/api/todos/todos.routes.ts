import {Router, Response, Request} from 'express';
import * as TodoControllers from './todos.controllers';
import {Todos, TodoWithId} from './todos.model';

const router = Router();

router.get('/', TodoControllers.getTodos)
router.post('/', TodoControllers.createOne);


export default router;
// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }])

// })