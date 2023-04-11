import {Router, Response, Request} from 'express';
import * as TodoHandlers from './todos.controllers';
import {Todos, TodoWithId} from './todos.model';

const router = Router();

router.get('/', TodoHandlers.getTodos)


export default router;
// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }])

// })