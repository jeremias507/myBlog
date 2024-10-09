import { NextFunction, Response, Request } from "express";

export const validatorSchema = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parse(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({ message: error.errors.map((error:any) => error.message) });
    }
  };
