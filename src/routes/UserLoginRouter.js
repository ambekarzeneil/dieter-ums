// @flow
import { Router } from 'express';
import {loginWithPassword} from "../provider/auth0Provider";

export default class UserLoginRouter {

    router: Router;
    path: string;

    constructor(path: string = '/api/v1.0/login') {
        this.router = Router();
        this.path = path;

        this.init();

    }

    init() : void {
        this.router.post('/', (req : $Request, res : $Response) => this.login(req, res));
    }

    login(req: $Request, res: $Response) {
        const {username, password, scopes} = req.body;

        loginWithPassword(username, password, scopes).then((token : string) => {
            res.status(200).json({token});
        }).catch(err => {
            const error = err.message;
            res.status(403).json({error})
        });

    }

}
