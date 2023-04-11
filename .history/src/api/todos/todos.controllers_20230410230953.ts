import { Request, Response, NextFunction } from "express"
import { InsertOneResult } from "mongodb"
import { ZodError } from "zod"
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

export const createOne = async(req: Request<{}, TodoWithId, Todo>, res: Response<TodoWithId>, next: NextFunction) => {
    try {
        const validateResult = await Todo.parse(req.body);
        const insertResult = await Todos.insertOne(validateResult)
        if(!insertResult.acknowledged) throw new Error('Error inserting Todo.')
        res.status(201);
        res.json({
            _id: insertResult.insertedId,
            ...validateResult,
        })
    } catch (err) {
        if(err instanceof ZodError) {
            res.status(422);
        }
        next(err)
    }

}