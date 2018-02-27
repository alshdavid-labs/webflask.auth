module.exports = function Response({ code, body }){
    return {
        statusCode: code || 200,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(body)
    }
}