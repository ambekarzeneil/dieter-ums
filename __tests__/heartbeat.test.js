import request from 'supertest-as-promised';
import Api from '../src/Api';

const app = new Api().express;

describe('Heartbeat API', () => {

    describe('GET /api/v1.0/heartbeat - get heartbeat', () => {
        it('should get heartbeat', () => {
            return request(app).get('/api/v1.0/heartbeat').expect(200).then(res => {
                expect(res).toHaveProperty('body');
                expect(res.body).toHaveProperty('status','ok');
                expect(res.body).toHaveProperty('version', '1.0');
            })

        })

    })

});