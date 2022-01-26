import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

statusRoute.get(
  "/status",
  (request: Request, response: Response, next: NextFunction) => {
    response.sendStatus(StatusCodes.OK);
  }
);

export default statusRoute;
