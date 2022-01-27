import { Request, Response, NextFunction, Router } from 'express';
import ForbiddenError from '../modules/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';
import JWT from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../../middlewares/authentication';



const authorizationRoute  = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (request:Request, response:Response, next: NextFunction) => { 
    try {
    const user = request.user;
    
    if (!user){
        throw new ForbiddenError('Usuário não informado!');
    }
    
    const jwtPayload = {username: user.username};
    const jwtOptions = {subject: user?.uuid};
    const secretKey = 'my_secret_key';
    
    const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
    response.status(StatusCodes.OK).json({ token : jwt });
    
}catch (error) {
    next(error);
}
});

export default authorizationRoute;