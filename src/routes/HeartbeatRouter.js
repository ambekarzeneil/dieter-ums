// @flow
import { Router } from 'express';

export default class HeartbeatRouter {

    router: Router;
    path: string;

    constructor(path : string = '/api/v1.0/heartbeat') {
        this.router = Router();
        this.path = path;

        this.init();
    }


    init() : void {
        this.router.get('/', this.getHeartbeat)
    }

    getHeartbeat(req: $Request, res: $Response) {
        res.status(200).json({version: '1.0', status: 'ok'});
    }

}
