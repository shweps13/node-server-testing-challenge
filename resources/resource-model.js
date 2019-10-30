const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where({ id }).first();
}

function add(resource) {
    return db('resources').insert(resource, 'id');
}

function update(changes,id) {
    return db('resources')
    .update(changes)
    .where('id', id)
    .then(() => {
        return findById(id)
    })
}

function remove(id) {
    let res = '';

    findById(id).then(selectedRes => {
        res = selectedRes;
    })
    return db('resources')
    .where('id',id)
    .del()

}