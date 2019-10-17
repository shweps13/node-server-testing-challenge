const Resources = require('./resource-model.js');
const db = require('../data/dbConfig.js');

it('should set testing environment', () => {
    // console.log(process.env.DB_ENV);
    expect(process.env.DB_ENV).toBe("testing");
});

describe('resources model', () => {
    
    beforeEach(async () => {
        await db('resources').truncate();  
    })


  describe('add()', () => {
    it('should add resource to database', async () => {

      // add one record
      let resource = await Resources.add({resName: "machinery", resType: "Economic", note: "In economics a resource is defined as a service or other asset used to produce goods"});
    //   console.log(resource[0]);
      let foundRes = await Resources.findById(resource[0]);
      console.log(foundRes);
      expect(foundRes.resName).toBe("machinery");
        

      // check we now have one record in the table
      const resources = await db('resources');
      expect(resources).toHaveLength(1);
    });
  });

});