import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
   
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
