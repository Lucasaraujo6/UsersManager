import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "config";

export async function AuthHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // console.log(req.headers);
    const auth = req.headers.authorization;
    if (!auth) {
      return next({ errno: 3 });
    } else {
      if (jwt.verify(auth.split(" ")[1], config.get<string>("secret"))) {
        return next();
      }
    }
  } catch (e: any) {
    return next(e);
  }
}
