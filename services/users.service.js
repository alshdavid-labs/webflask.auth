const bcrypt = require('bcryptjs')
const slugify = require('slugify')

function create(identifier, password, project = 'webflask') {
    if (!identifier || !password) {
        throw 'No details entered'
    }
    identifier = identifier.toLowerCase()
    project = project.toLowerCase()
    return Promise.resolve()
        .then(_ => bcrypt.genSalt(5))
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => ({ identifier, password: hash, id: `${slugify(project)}.${slugify(identifier)}` }))
        .catch(error => console.log(error))
}


module.exports = {
    create
}