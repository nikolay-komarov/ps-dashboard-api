import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import {UserController} from "./users/user.controller";

export class App {
  app: Express;
  port: number = 3000;
  server: Server;
  
  
  constructor(
    private _logger: LoggerService,
    private _userController: UserController,
  ) {
    this.app = express();
  }
  
  useRoutes() {
    this.app.use('/users', this._userController.router);
  }
  
  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    
    this._logger.info(`App listening on port ${this.port}`);
  }
}
