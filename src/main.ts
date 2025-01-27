import { Container } from "inversify";
import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { TYPES } from "./types";
import { UserController } from "./users/user.controller";
import 'reflect-metadata';

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<ExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();
