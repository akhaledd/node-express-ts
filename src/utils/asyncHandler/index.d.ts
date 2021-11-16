import express from 'express'
import core from 'express-serve-static-core'

declare function asyncHandler<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query
>(
  handler: (...args: Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>) => any
): express.RequestHandler<P, ResBody, ReqBody, ReqQuery>

declare namespace asyncHandler {}

export default asyncHandler
