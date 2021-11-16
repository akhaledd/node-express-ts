import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'

export const myController = asyncHandler(async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' })
})