import { Request, Response } from 'express'
import asyncHandler from '../utils/asyncHandler'

export const myController = asyncHandler(async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World' })
})
