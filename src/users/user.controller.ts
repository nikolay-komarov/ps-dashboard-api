import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController {
  constructor(@inject(TYPES.ILogger) protected _logger: ILogger) {
    super(_logger);
   
    this.bindRoutes([
      {
        path: '/signin',
        func: (_req: Request, res: Response, _next: NextFunction) => {
          // res.send('signin');
          _next(new HTTPError(401, 'ошибка входа', 'signin'))
        },
        method: 'post',
      },
      {
        path: '/signup',
        func: (_req: Request, res: Response, _next: NextFunction) => {
          res.send('signup');
        },
        method: 'post',
      },
    ])
  }
}
