import {Router, Response, Request} from 'express';
import {Todos, TodoWithId} from './todos.model';

const router = Router();

router.get('/', async (req: Request, res: Response<TodoWithId[] | {err: string}>) => {
    try {
        const todoCursor = await Todos.find()
        const todos = await todoCursor.toArray()
        res.status(200).json(todos)
    } catch (err) {
        res.status(404).json({err: 'todos not found'})
    }
})


export default router;
// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }])

// })