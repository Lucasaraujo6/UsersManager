// import { Express } from "express";

import { create, login, profile } from "./controller/user.controller";
import { AuthHandler } from "./middlewares/AuthHandler";
import { ErrorHandler } from "./middlewares/ErrorHandler";

// const routes = (app: Express) => {
//   app
//     //URLS
//     .post("/api/signup", create)
//     .post("/api/signin", login)
//     .use(AuthHandler)
//     .get("/api/profile", profile)
//     // .use(treatError);

//     .use(ErrorHandler);
// };

// export default routes;

import express from "express";

const routes = express();

routes
  .post("/api/signup", create)
  .post("/api/signin", login)
  .use(AuthHandler)
  .get("/api/profile", profile)
  .use(ErrorHandler);
// .use(treatError);

export default routes;
