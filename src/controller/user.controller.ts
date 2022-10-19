import { NextFunction, Request, Response } from "express";

import { ILogin, IRegister } from "../models/users.model";

import {
  createUser,
  loginUser,
  getToken,
  validateNewUser,
  validateUserLoginData,
  decode,
} from "../service/url.service";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const registerInfos: IRegister = req.body;

    const valid = await validateNewUser(registerInfos);
    if (!valid) {
      return next({ errno: 1 });
    }

    const token = await createUser(registerInfos);
    if (token instanceof String) return res.send(token).status(202);

    throw token;
  } catch (e: any) {
    return next(e);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const loginData: ILogin = req.body;

    const valid = await validateUserLoginData(loginData);
    if (!valid) {
      return next({ errno: 1 });
    }

    const token = await loginUser(loginData);
    if (token) {
      return res.send({ message: "Success", token }).status(202);
    }
    return next({ errno: 2 });
  } catch (e: any) {
    return next(e);
  }
}

export async function profile(req: Request, res: Response, next: NextFunction) {
  try {
    res.send({ message: "Logadão" }).status(200);
  } catch (e: any) {
    return next(e);
  }
}

// REFERÊNCIAS
// https://expressjs.com/pt-br/guide/error-handling.html
// https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/
