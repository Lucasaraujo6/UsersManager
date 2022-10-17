import { NextFunction, Request, Response } from "express";
import { IRegister } from "../models/users.model";

import { createUser, getUrl } from "../service/url.service";
import log from "../utils/logger";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const registerInfos: IRegister = req.body;
    const token = await createUser(registerInfos);

    if (token instanceof String) {
      return res.send(token).status(202);
    }
    return next({ message:"Usuário já cadastrado", status: 409 })
  } catch (e: any) {
    return next({ message: e.message, status: 500 });
  }
}

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const urlId = req.params.urlId;

    // const url = await getUrl(urlId);
    // if (!url) {
    //   throw new Error("Erro na url");
    // }

    return res.redirect("url.url");
  } catch (e) {
    // const error = new Error(e);
    // Error.httpStatusCode = 500;
    return next({ e, status: 400 });
    // log.error(e);
  }
}

export async function handleError(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(err.status).send(err.message);
}

// REFERÊNCIAS
// https://expressjs.com/pt-br/guide/error-handling.html
// https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/
