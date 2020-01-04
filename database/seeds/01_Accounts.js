
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, username: 'BlackMemo', password:'12345abc'},
        {id: 2, username: 'Voudou', password:'12345abc'},
        {id: 3, username: 'BrandyBeckerFSW', password:'12345abc'}
      ]);
    });
};
