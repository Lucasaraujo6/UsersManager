import config from "config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { insertUser, getUser } from "../repository/url.repository";
import {
  IRegister,
  IUser,
  createUserSchema,
  ILogin,
  userLoginSchema,
} from "../models/users.model";

export async function createUser(registerInfos: IRegister) {
  try {
    registerInfos.password = await bcrypt.hash(registerInfos.password, 8);
    delete registerInfos.confirmPassword;
    const allInfos: IUser = registerInfos;

    const insert = await insertUser(allInfos);
    if (!(insert instanceof Array)) {
      throw insert;
    }
    const token = getToken(registerInfos);

    return { token };
  } catch (e: any) {
    return e;
  }
}
export async function loginUser(data: ILogin) {
  try {
    const userData = await getUser(data);
    if (userData instanceof Array) {
      if (userData.length === 0) {
        return;
      }
      const compare = await bcrypt.compare(data.password, userData[0].password);
      if (compare) {
        const token = getToken(data);
        console.log(token);
        return token;
      } else {
        return;
      }
    }
  } catch (e: any) {
    return e;
  }
}

export function decode(token: string) {
  try {
    // console.log(jwt.verify(token, config.get<string>("secret")));
    return 1;
  } catch (e) {
    throw e;
  }
}
export async function getToken(loginData: ILogin) {
  try {
    return jwt.sign({ id: loginData.email }, config.get<string>("secret"), {
      expiresIn: config.get<string>("expiresIn"),
    });
  } catch (e) {
    throw e;
  }
}

export async function validateNewUser(data: IRegister) {
  let isValid = false;

  await createUserSchema.isValid(data).then((valid) => {
    isValid = valid;
  });

  return isValid;
}

export async function validateUserLoginData(data: ILogin) {
  let isValid = false;

  await userLoginSchema.isValid(data).then((valid) => {
    isValid = valid;
  });

  return isValid;
}
