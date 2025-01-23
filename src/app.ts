import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { usersRouter } from "./users/users";

export class App {
  app: Express;
  port: number = 3000;
  server: Server;
  
  constructor(private _logger: LoggerService) {
    this.app = express();
  }
  
  useRoutes() {
    this.app.use('/users', usersRouter);
  }
  
  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    
    // console.log(`Server running on port: ${this.port}`);
    this._logger.info(`App listening on port ${this.port}`);
  }
}
