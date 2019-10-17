const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    
    // should return http 200 ok
    it('should return 200 http status code', () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
        })
    })

    // should return text
    it('should return a text greeting', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch(/[A-Za-z0-9]+/);
    });
    })

describe('GET /api/resources', () => {
    
    // should return http 200 ok
    it('should return 200 http status code', () => {
        return request(server)
        .get('/api/resources')
        .then(response => {
            expect(response.status).toBe(200);
        })
    })

    // should return json
    it('should return a JSON object', async () => {
        const response = await request(server).get('/api/resources');
        expect(response.type).toMatch(/json/i);
    });

    // should return an object with an up api property with the value 'up'

    it('should return array ', async () => {    
        const response = await request(server).get('/api/resources');
    
        expect(response.body[1]).toEqual({"id": 2, "note": null, "resName": "sunlight", "resType": "Biological"});
        });

    })

