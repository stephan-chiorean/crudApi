import { Request, Response, NextFunction } from "express"
import { InsertOneResult } from "mongodb"
import { Todo, Todos, TodoWithId } from "./todos.model"
export const getTodos = async (req: Request, res: Response<TodoWithId[]>, next: NextFunction) => {
    try {
        const todoCursor = await Todos.find()
        const todos = await todoCursor.toArray()
        res.status(200).json(todos)
    } catch (err) {
        next(err)
    }
}

export const createOne = async(req: Request<{}, InsertOneResult<Todo>, Todo>, res: Response<InsertOneResult<Todo>>, next: NextFunction) => {
    try {
        const validateResult = await Todo.parse(req.body);
        const insertResult = await Todos.insertOne(validateResult)
        res.json(insertResult)
    } catch (err) {
        next(err)
    }

}