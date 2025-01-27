import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import 'reflect-metadata';
import {IUserController} from "./user.controller.interface";

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(@inject(TYPES.ILogger) protected _logger: ILogger) {
    super(_logger);
   
    this.bindRoutes([
      { path: '/signin', func: this.signin, method: 'post' },
      { path: '/signup', func: this.signup, method: 'post' },
    ])
  }
  
  signin(_req: Request, res: Response, _next: NextFunction) {
    // res.send('signin');
    _next(new HTTPError(401, 'ошибка входа', 'signin'))
  }

  signup(_req: Request, res: Response, _next: NextFunction) {
    res.send('signup');
  }
}
