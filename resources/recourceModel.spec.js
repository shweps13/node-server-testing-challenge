const Resources = require('./resource-model.js');
const db = require('../data/dbConfig.js');

it('should set testing environment', () => {
    console.log(process.env.DB_ENV)
    expect(process.env.DB_ENV).toBe('testing');
});

