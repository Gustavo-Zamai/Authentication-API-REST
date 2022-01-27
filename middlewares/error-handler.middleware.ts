import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../src/modules/errors/database.error.model";


function errorHandler(error:any, request: Request, response: Response, next: NextFunction){
    if (error instanceof DatabaseError) {
        response.sendStatus(StatusCodes.BAD_REQUEST);
      } else {
        response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      }
}

export default errorHandler;