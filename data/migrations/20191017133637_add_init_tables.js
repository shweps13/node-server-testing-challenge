
exports.up = function(knex) {
    return knex.schema.createTable('resources', resources => {
      resources.increments();
  
      resources
        .string('resName', 128)
        .notNullable()
        .unique();
      resources.string('resType', 128).notNullable();
      resources.string('note', 128);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
  };
  