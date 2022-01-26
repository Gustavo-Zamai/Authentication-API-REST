import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router();
//  get/users

usersRoute.get('/users', (request: Request, response: Response, next: NextFunction) => {
    const users = [{userName: 'Gustavo'}];
    response.status(200).send({ users });
});

export default usersRoute;


//  get/users/:uuid
//  post/users
//  put/users/:uuid
//  delete/users/:uuid

