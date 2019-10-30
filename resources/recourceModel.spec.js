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
      // check that we add new record
      let resource = await Resources.add({resName: "machinery", resType: "Economic", note: "In economics a resource is defined as a service or other asset used to produce goods"});

      let foundRes = await Resources.findById(resource[0]);
      console.log(foundRes);
      expect(foundRes.resName).toBe("machinery");
      expect(foundRes.resType).toBe("Economic");
      expect(foundRes.note).toBe("In economics a resource is defined as a service or other asset used to produce goods");
        

      // check we now have one record in the table
      const resources = await db('resources');
      expect(resources).toHaveLength(1);
    });
  });
});

describe('put()', () => {
    
    it('should add resource to database', async () => {
        let putData = {resName: "Sun", resType: "Biological", note: null};

        // check that we cange the record
        let resource1 = await Resources.update(putData, 1);

        let foundRes = await Resources.findById(resource1.id);
        console.log(foundRes);
        expect(foundRes.resName).toBe("Sun");
        expect(foundRes.resType).toBe("Biological");
        expect(foundRes.note).toBe(null);

        // check that we still have one resource
        const resources = await db('resources');
        expect(resources).toHaveLength(1);
    });
});

describe('delete()', () => {
    
    it('should add resource to database', async () => {
        let postNewData = {resName: "Wind", resType: "Biological", note: null};

        // check that we add the record
        let resource2 = await Resources.add(postNewData);

        let foundRes = await Resources.findById(resource2[0]);
        console.log(foundRes);
        expect(foundRes.resName).toBe("Wind");
        expect(foundRes.resType).toBe("Biological");
        expect(foundRes.note).toBe(null);

        // check that we have 2 records now
        const resources = await db('resources');
        expect(resources).toHaveLength(2);

        // removing second record
        let DelRes = await Resources.remove(resource2[0]);

        // check that we have one element
        const resourcesAfter = await db('resources');
        expect(resourcesAfter).toHaveLength(1);

    });
});