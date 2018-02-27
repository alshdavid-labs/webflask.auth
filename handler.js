let routes = require('./routes')

function router(endpoint, event, callback){
  event.body = JSON.parse(event.body || '{}')
  routes[endpoint](event)
    .then(response => callback(null, response))
    .catch(error => callback(null, error))
}

module.exports.index = 
  (event, context, callback) => router('index', event, callback)

module.exports.login = 
  (event, context, callback) => router('login', event, callback)

module.exports.register = 
  (event, context, callback) => router('register', event, callback)