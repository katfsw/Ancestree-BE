const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('accounts').select('id', 'username');
}

function findBy(filter) {
    return db('accounts').where(filter);
}

async function add(user) {
    const [id] = await db('accounts').insert(user);

    return findById(id);
}

function findById(id) {
    return db('accounts')
    .where({ id })
    .first();
}