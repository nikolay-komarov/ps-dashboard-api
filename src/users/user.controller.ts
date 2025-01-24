import {NextFunction, Request, Response} from "express";
import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
   
    this.bindRoutes([
      {
        path: '/signin',
        func: (_req: Request, res: Response, _next: NextFunction) => {
          res.send('signin');
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
