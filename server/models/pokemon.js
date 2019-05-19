const { Model } = require('objection');
const { transaction } = require('objection');
const db = require('./knexfile.ts')

// pass the knex connection to objection
 Model.knex(db)

class Pokemon extends Model {
  static get tableName() {
    return 'pokemon';
  }

  getAll(txn) {
    try {
      const result = await transaction(knex, async (txn) => {
        const pokemon = await Pokemon.query(txn).orderby('pokemonNumber');
        return pokemon;
        })
      console.log("Yazza! You have caught 'em all!");
    } catch (err) {
      console.log('Womp, you have not all the pokemon in thine pocket');
    }
  }

  //get()
}

module.exports = Pokemon;

/*
DONE ● getAll(txn: Transaction) ­ returns all Pokemon, ordered by pokemonNumber ascending

--> test: check that it returned something, test that it returns the table length?

● get(pokemonId: string, txn: Transaction) ­ returns a single Pokemon, and associated
items


● create(input: IPokemonCreateInput, txn: Transaction) ­ creates and returns a Pokemon
● edit(pokemonId: string, pokemon: IPokemonEditInput, txn: Transaction) ­ edits an
existing Pokemon
● delete(pokemonId: string, txn: Transaction) ­ marks a Pokemon as deleted, but does not
actually delete it from the database
*/