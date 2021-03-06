import * as BodyParser from "body-parser";
import * as cors from "cors";
import { Application, NextFunction, Request, Response } from "express";
import * as express from "express";
import * as jwt from "express-jwt";
import * as session from "express-session";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as passport from "passport";
import { mongooseConnection, errorHandler } from "./middlewares";
import { port, mongoUrl, unlessPath, jwtSecret, env } from "./config";

import allRoutes from "./routes";

const server: Application = express();

/**
 * Node.js body parsing middleware.
 * https://github.com/expressjs/body-parser
 */
server.use(BodyParser.urlencoded({ extended: true }));
server.use(BodyParser.json());

/**
 * CORS is a node.js package for providing a Connect/Express middleware that
 * can be used to enable CORS with various options.
 * https://github.com/expressjs/cors
 */
server.use(cors());

// Sessions
server.use(
  session({ secret: jwtSecret, resave: true, saveUninitialized: true })
);

// PassportJS
server.use(passport.initialize());
server.use(passport.session());

/**
 * Helmet helps you secure your Express apps by setting various HTTP headers.
 * https://github.com/helmetjs/helmet
 */
server.use(helmet());

// Mongoose
server.use(mongooseConnection());

/**
 * Some libs an configs, can run only in development mode.
 */
if (env !== "production") {
  /**
   * HTTP request logger middleware for node.js
   * https://github.com/expressjs/morgan
   */
  const morgan = require("morgan");
  server.use(morgan("dev"));
  /**
   * Show documentation on dev mode
   * Show run app client on dev mode
   */
  server.use("/doc", express.static("src/public/doc"));
  server.use("/", express.static("src/public/app"));
  server.use("/app", express.static("build/public/app"));
} else {
  // All resources inside `else` statement, will be available only production mode.

  /**
   * Show documentation on production mode
   * Show run app client on production mode
   */
  server.use("/doc", express.static("build/public/doc"));
  server.use("/", express.static("build/public/app"));
  server.use("/app", express.static("build/public/app"));

  /**
   * Protect all routes.
   * Routes includes in `./config/unlessPath.ts` don't will be not protected.
   */
  //server.use(jwt({ secret: jwtSecret }).unless(unlessPath));
}

// Default error
server.use(
  (err: ErrorEventHandler, req: Request, res: Response, next: NextFunction) => {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("login Error");
    }
  }
);

/**
 * Set all routes in application
 */
allRoutes(server);

server.use(errorHandler());
/**
 * Run server on setted port
 * Show wich mode is running
 */
server.listen(port, () => {
  console.log(`Server running on port ${port} in ${env} mode.`);
});

/**
 * Export `express instance` for use in tests environment
 */
export default server;
