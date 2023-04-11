import { Request, Response, NextFunction } from "express"
import { Todos, TodoWithId } from "./todos.model"
export const getTodos = async (req: Request, res: Response<TodoWithId[]>, next: NextFunction) => {
    try {
        const todoCursor = await Todos.find()
        const todos = await todoCursor.toArray()
        res.status(200).json(todos)
    } catch (err) {
        next(err)
    }
}