
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resName: 'machinery', resType: 'Economic', note: 'In economics a resource is defined as a service or other asset used to produce goods'},
        {resName: 'sunlight', resType: 'Biological', note: null},
        {resName: 'minerals', resType: 'Natural', note: 'Natural resources are derived from the environment'}
      ]);
    });
};
