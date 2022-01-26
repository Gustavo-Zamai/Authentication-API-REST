import express, {Request, Response, NextFunction} from "express";

const app = express();

app.get('/status', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send({foo: 'bar'});
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});