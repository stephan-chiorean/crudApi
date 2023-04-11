import {Router, Response, Request} from 'express';
import {Todo, Todos} from './todos.model';

const router = Router();

router.get('/', async (req: Request, res: Response<Todo[] | Error>) => {
    try {
        const todos = await Todos.find()
        res.status(200).json(todos)
    } catch (err: any) {
        res.status(404).json(err)
    }
})

// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learn TypeScript',
//         done: false,
//     }])

// })

export default router;