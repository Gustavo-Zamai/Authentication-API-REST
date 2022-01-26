import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
const usersRoute = Router();

//  GET-get/users
usersRoute.get(
  "/users",
  (request: Request, response: Response, next: NextFunction) => {
    const users = [{ userName: "Gustavo" }];
    response.status(StatusCodes.OK).send({ users });
  }
);

//  GET-get/users/:uuid
usersRoute.get(
  "/users/:uuid",
  (
    request: Request<{ uuid: string }>,
    response: Response,
    next: NextFunction
  ) => {
    const uuid = request.params.uuid;
    //BD.getUserByUUid(uuid);
    response.status(StatusCodes.OK).send({ uuid });
  }
);

//  POST-post/users
usersRoute.post(
  "/users",
  (
    request: Request<{ uuid: string }>,
    response: Response,
    next: NextFunction
  ) => {
    const newUser = request.body;
    response.status(StatusCodes.CREATED).send(newUser);
  }
);

//  PUT-put/users/:uuid
usersRoute.put(
  "/users/:uuid",
  (
    request: Request<{ uuid: string }>,
    response: Response,
    next: NextFunction
  ) => {
    const uuid = request.params.uuid;
    //BD
    const modifiedUser = request.body;

    modifiedUser.uuid = uuid;

    response.status(StatusCodes.OK).send({ modifiedUser });
  }
);

//  DELETE-delete/users/:uuid
usersRoute.delete(
  "/users/:uuid",
  (
    request: Request<{ uuid: string }>,
    response: Response,
    next: NextFunction
  ) => {
    const uuid = request.params.uuid;
    response.sendStatus(StatusCodes.OK);
  }
);

export default usersRoute;
