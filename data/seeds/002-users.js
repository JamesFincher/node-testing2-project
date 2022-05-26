/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {firstName: 'Clay', lastName: 'Blackiston', phone: "2039218551", email: 'clayblackiston1@gmail.com'},
    {firstName: 'Anne', lastName: 'Hathaway', phone: "20655501282", email: 'annehathaway@gmail.com'},
    {firstName: 'George', lastName: 'Plumis', phone: "20655511282", email: 'georgeplumis@gmail.com'}
  ]);
};
