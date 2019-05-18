const { Model } = require('objection');
const { transaction } = require('objection');
// const db = require('..DB FILE ANDREW SENT)

// pass the knex connection to objection
// Model.knex(db)

class Pokemon extends Model {
  static get tableName() {
    return 'pokemon';
  }
  getAll() {
    return this.query().orderby('pokemonNumber');
  }
}

module.exports = Pokemon;

/*
getAll(txn: Transaction) ­ returns all Pokemon, ordered by pokemonNumber ascending
● get(pokemonId: string, txn: Transaction) ­ returns a single Pokemon, and associated
items
● create(input: IPokemonCreateInput, txn: Transaction) ­ creates and returns a Pokemon
● edit(pokemonId: string, pokemon: IPokemonEditInput, txn: Transaction) ­ edits an
existing Pokemon
● delete(pokemonId: string, txn: Transaction) ­ marks a Pokemon as deleted, but does not
actually delete it from the database


class MinimalModel extends Model {
  static get tableName() {
    return 'someTableName';
  }
}






try {
  const returnValue = await transaction(Person.knex(), async (trx) => {
    // Here you can use the transaction.

    // Whatever you return from the transaction callback gets returned
    // from the `transaction` function.
    return 'the return value of the transaction';
  });
  // Here the transaction has been committed.
} catch (err) {
  console.log('pinneaple prices are too high! failed to fetch all your pokEs!')
}
*/
