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

    // should return an object with an resource

    it('should return array ', async () => {    
        const response = await request(server).get('/api/resources');
    
        expect(response.body[0]).toEqual(
            {
                "id": 1,
                "resName": "Sun",
                "resType": "Biological",
                "note": null
            }
        );
        });

    })

