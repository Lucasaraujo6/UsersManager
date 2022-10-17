import { Express } from "express";

import { create, get, handleError } from "./controller/user.controller";

const routes = (app: Express) => {
  app
    //URLS
    .post("/api", create)
    // .use(treatError);

    .use(handleError);
};

export default routes;
