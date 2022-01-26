import { Router, Request, Response, NextFunction, response } from 'express';
import { StatusCodes } from 'http-status-codes';
const usersRoute = Router();

//  get/users
usersRoute.get('/users', (request: Request, response: Response, next: NextFunction) => {
    const users = [{userName: 'Gustavo'}];
    response.status(StatusCodes.OK).send({ users });
});


//  get/users/:uuid
usersRoute.get('/users/:uuid', (request: Request <{uuid: string}>, response: Response, next: NextFunction) => {
    const uuid = request.params.uuid;
    //BD.getUserByUUid(uuid);
    response.status(StatusCodes.OK).send({ uuid });
});




//  post/users
//  put/users/:uuid
//  delete/users/:uuid

export default usersRoute;