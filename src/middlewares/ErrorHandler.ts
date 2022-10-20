import { NextFunction, Request, Response } from "express";

export async function ErrorHandler(
  e: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  switch (e.errno) {
    case 1:
      return res.status(400).send({ message: "Dados inválidos" });
    case 2:
      return res.status(401).send({ message: "Usuário ou senha incorreta" });
    case 3:
      return res.status(401).send({ message: "Token inválido" });
    case 1062:
      return res.status(409).send({ message: "E-mail já cadastrado" });
    default:
      return res.status(500).send({ message: "Erro inesperado.", stack: e.stack });
  }
}
