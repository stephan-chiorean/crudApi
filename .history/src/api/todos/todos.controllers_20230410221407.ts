import { Request, Response } from "express"
import { Todos, TodoWithId } from "./todos.model"
export const getTodos = async (req: Request, res: Response<TodoWithId[] | {err: string}>) => {
    try {
        const todoCursor = await Todos.find()
        const todos = await todoCursor.toArray()
        res.status(200).json(todos)
    } catch (err) {
        res.status(404).json({err: 'todos not found'})
    }
}