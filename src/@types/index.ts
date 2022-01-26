import express, {Request, Response, NextFunction} from "express";
import usersRoute from "../routes/users.route";

const app = express();
//APP configuration
app.use(express.json());  //middleware
app.use(express.urlencoded({ extended: true }));

//Route configuration
app.use(usersRoute);

app.get('/status', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send({foo: 'Success!'});
});

//Start Server
app.listen(3000, () => {
    console.log('Running on port 3000');
});