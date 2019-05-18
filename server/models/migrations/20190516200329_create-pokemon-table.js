const pokeTypes = require('../../constants/poke-types.ts');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(t) {
    t.uuid('id')
      .primary()
      .notNull();
    t.integer('pokemonNumber')
      .unique()
      .unsigned()
      .notNull();
    t.string('name')
      .unique()
      .notNull();
    t.integer('attack').notNull();
    t.integer('defense').notNull();
    t.enu('pokeType', pokeTypes).notNull();
    t.json('moves')
      .defaultTo('[]')
      .notNull();
    t.string('imageUrl').notNull();
    t.timestamp('createdAt').defaultTo(knex.fn.now());
    t.timestamp('updatedAt').defaultTo(knex.fn.now());
    /* note we mark things as deleted, but rarely
    delete them in our database (“soft deletion”)*/
    t.timestamp('deletedAt');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
