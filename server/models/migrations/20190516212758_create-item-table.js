exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', function(t) {
    t.uuid('id')
      .primary()
      .notNull();
    t.string('name')
      .unique()
      .notNull();
    t.uuid('pokemonId')
      .references('id')
      .inTable('pokemon')
      .onDelete('CASCADE')
      .notNull();
    t.integer('price').notNull();
    t.integer('happiness').notNull();
    t.string('imageUrl').notNull();
    t.timestamp('createdAt').defaultTo(knex.fn.now());
    t.timestamp('updatedAt').defaultTo(knex.fn.now());
    /* note we mark things as deleted, but rarely
    delete them in our database (“soft deletion”)*/
    t.timestamp('deletedAt');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item');
};
