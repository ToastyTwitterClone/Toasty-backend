import express, { Router } from "express";
import { Application } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; routes: Array<Router> }) {
    this.app = express();
    this.port = appInit.port;
    this.routes(appInit.routes);
    this.app.use(cookieParser());
    this.app.use(logger("dev"));
  }

  private routes(routers: Array<Router>): void {
    routers.forEach((route) => {
      this.app.use("/", route);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
