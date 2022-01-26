import { Router, Request, Response, NextFunction, response } from 'express';
import { StatusCodes } from 'http-status-codes';
const usersRoute = Router();

//  GET-get/users
usersRoute.get('/users', (request: Request, response: Response, next: NextFunction) => {
    const users = [{userName: 'Gustavo'}];
    response.status(StatusCodes.OK).send({ users });
});


//  GET-get/users/:uuid
usersRoute.get('/users/:uuid', (request: Request <{uuid: string}>, response: Response, next: NextFunction) => {
    const uuid = request.params.uuid;
    //BD.getUserByUUid(uuid);
    response.status(StatusCodes.OK).send({ uuid });
});


//  POST-post/users
usersRoute.post('/users' , (request: Request <{uuid: string}>, response: Response, next: NextFunction) => {
    const newUser = request.body;
    console.log(request.body);
    response.status(StatusCodes.CREATED).send(newUser);
});


//  PUT-put/users/:uuid
//  DELETE-delete/users/:uuid

export default usersRoute;