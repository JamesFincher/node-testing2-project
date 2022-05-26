/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('communities').truncate()
  await knex('communities').insert([
    {name: 'ABC Apartments', address: '123 Main St', city: 'Seattle', state: 'WA'},
    {name: 'Cherry Creek Apartments', address: '456 Pleasant Rd', city: 'Greenwhich', state: 'CT'},
    {name: 'The Atlas Apartments', address: '100 Fifth Ave', city: 'New York', state: 'NY'}
  ]);
};
