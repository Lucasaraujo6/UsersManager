// import { customAlphabet } from "nanoid";

// const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  token: string;
}
