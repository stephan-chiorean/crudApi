import * as z from 'zod';

const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

type Todo = z.infer<typeof Todo>;

export default Todo;


/* 
interface Todo {
  content: string;
  done: boolean;
}

export default Todo
*/