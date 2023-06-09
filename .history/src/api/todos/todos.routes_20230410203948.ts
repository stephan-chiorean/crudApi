import {Router, Response, Request} from 'express';
import {Todo, Todos} from './todos.model';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
    res.json([{
        content: 'Learn this',
        done: false,
    }])
})

router.get<{}, Todo[]>('/', (req, res) => {
    res.json([{
        content: 'Learn TypeScript',
        done: false,
    }])

})

export default router;