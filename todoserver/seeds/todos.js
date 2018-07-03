
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Cure Cancer'},
        {id: 2, task: 'Restore peace to the middle-east'},
        {id: 3, task: 'Eliminate world hunger'},
        {id: 4, task: 'pick up milk from the store'}
      ]);
    });
};
