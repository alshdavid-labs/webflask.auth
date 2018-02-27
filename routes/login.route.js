const Response = require('../models/repsponse.model')

module.exports = function(event){
    return new Promise(res => {
        let body = { message: 'Login' }
        res(Response({ body })
        ) 
    })
}