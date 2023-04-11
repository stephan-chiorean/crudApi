import {Router, Response, Request} from 'express';
import { getTodos } from './todos.controllers';
import {Todos, TodoWithId} from './todos.model';

const router = Router();

router.get('/', getTodos)


export default router;
// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }])

// })