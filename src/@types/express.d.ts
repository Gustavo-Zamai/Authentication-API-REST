import { User} from '../modules/user.model';

declare module 'express-serve-static-core' {

    interface Request {
        user?: User | null
    }
}