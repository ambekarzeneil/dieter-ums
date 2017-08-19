import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import HeartbeatRouter from "./routes/HeartbeatRouter";

export default class Api {
    // annotate with the express $Application type
    express: express$Application ;

    // create the express instance, attach app-level middleware, attach routers
    constructor() {
        this.express  = express();
        this.middleware();
        this.routes();
    }

    // register middlewares
    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    // connect resource routers
    routes(): void {
        const heartbeatRouter : HeartbeatRouter = new HeartbeatRouter();
        this.express.use(heartbeatRouter.path, heartbeatRouter.router);

    }
}