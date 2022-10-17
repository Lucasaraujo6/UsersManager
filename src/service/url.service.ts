// import { urlInput } from '../models/url.model';
import { NextFunction } from "express";

import crypto from "crypto";
// import knex from "../database";
import config from "config";
import { insertUser } from "../repository/url.repository";
import { IRegister, IUser } from "../models/users.model";

const port = config.get<number>("port");
const host = config.get<string>("host");

export async function getUrl(input: string) {
  try {
    // return await getUrlObject(input);
  } catch (e) {
    throw e;
  }
}

export async function createUser(registerInfos: IRegister) {
  try {
    if (registerInfos.password !== registerInfos.passwordConfirmation) {
      throw new Error("Senhas diferentes");
    }

    delete registerInfos.passwordConfirmation;

    const token = createToken();
    const allInfos: IUser = { ...registerInfos, ...{ token } };
    await insertUser(allInfos);

    return token;
  } catch (e: any) {
    e.status = 404;
    e.statusCode = 404;
    return { e };
  }
}

const createToken = () => {
  return crypto.randomUUID();
};
