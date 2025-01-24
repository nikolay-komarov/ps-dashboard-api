import express, { Express } from "express";
import { Server } from "http";
import { ExceptionFilter } from "./errors/exception.filter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/user.controller";

export class App {
  app: Express;
  port: number = 3000;
  server: Server;
  
  constructor(
    private _logger: LoggerService,
    private _userController: UserController,
    private _exceptionFilter: ExceptionFilter
  ) {
    this.app = express();
  }
  
  useRoutes() {
    this.app.use('/users', this._userController.router);
  }
  
  useExceptionFilter() {
    this.app.use(this._exceptionFilter.catch.bind(this._exceptionFilter));
  }
  
  public async init() {
    this.useRoutes();
    this.useExceptionFilter();
    this.server = this.app.listen(this.port);
    
    this._logger.info(`App listening on port ${this.port}`);
  }
}
