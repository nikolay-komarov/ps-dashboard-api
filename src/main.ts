import {Container, ContainerModule, interfaces} from "inversify";
import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import {IExceptionFilter} from "./errors/exception.filter.interface";
import { ILogger } from "./logger/logger.interface";
import { LoggerService } from "./logger/logger.service";
import { TYPES } from "./types";
import { UserController } from "./users/user.controller";
import 'reflect-metadata';
import { IUserController } from "./users/user.controller.interface";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService);
  bind<IUserController>(TYPES.UserController).to(UserController);
  bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
  bind<App>(TYPES.Application).to(App);
});

function bootstrap() {
  const appContainer = new Container();
  appContainer.load(appBindings);
  
  const app = appContainer.get<App>(TYPES.Application);
  app.init();
  return { appContainer, app };
}

export const { appContainer, app } = bootstrap();
