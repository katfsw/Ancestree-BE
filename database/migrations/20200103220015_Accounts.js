
exports.up = function(knex) {
    return knex.schema.createTable('accounts',users=>{
        users.increments();

        users
        .string('username',128)
        .notNullable()
        .unique()

        users
        .string('password',128)
        .notNullable()

        users
        .string('email',128)

        users
        .string('first_name',128)

        users
        .string('middle_name',128)

        users
        .string('last_name',128)

        users
        .string('suffix',128)

        users
        .blob('profile_picture')

        users
        .text('bio',128)

        users
        .text('gender',128)

        users
        .string('birth_day',128)

        users
        .string('death_day',128)

        users
        .string('notes',128)

        users
        .timestamp('created_at').defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts')
};
