/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('communities', tbl => {
    tbl.increments()
    tbl.text('name')
    tbl.text('address')
    tbl.text('city')
    tbl.text('state')
  })
  .createTable('users', tbl => {
    tbl.increments()
    tbl.text('firstName')
    tbl.text('lastName')
    tbl.text('phone')
      .unique()
    tbl.text('email')
      .unique()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('communities')
  .dropTableIfExists('users')
};
