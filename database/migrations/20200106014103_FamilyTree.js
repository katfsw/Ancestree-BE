
exports.up = function(knex) {
    return knex.schema.createTable('familytree',familytreeinfo=>{
        familytreeinfo.increments();

        familytreeinfo
        .string('email',128)

        familytreeinfo
        .string('first_name',128)

        familytreeinfo
        .string('middle_name',128)

        familytreeinfo
        .string('last_name',128)

        familytreeinfo
        .string('suffix',128)

        familytreeinfo
        .blob('profile_picture')

        familytreeinfo
        .string('bio',128)

        familytreeinfo
        .string('gender',128)

        familytreeinfo
        .string('birth_day',128)

        familytreeinfo
        .string('death_day',128)

        familytreeinfo
        .string('notes',128)

    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('familytree')
};
