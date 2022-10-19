// import { customAlphabet } from "nanoid";
import * as yup from "yup";

// const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  // password: yup.number().required().positive().integer(),
  password: yup
    .string()
    .length(8)
    .matches(/(?=.*[A-Z])/, "Must Contain one uppercase"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match!")
    .required(),
});

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  // password: yup.number().required().positive().integer(),
  password: yup
    .string()
    .length(8)
    .matches(/(?=.*[A-Z])/, "Must Contain one uppercase"),
});

//https://stackoverflow.com/questions/1559751/regex-to-make-sure-that-the-string-contains-at-least-one-lower-case-char-upper
//https://www.codegrepper.com/code-examples/javascript/yup+check+for+uppercase+react
