const AWS = require('aws-sdk')
const uuid = require('uuid/v4')
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-southeast-2' })
const TableName = 'webflask_users'

function put(details) {
    const defaultItem = { id: uuid(), dateCreated: Date.now() }
    return docClient.put({
        TableName,
        Item: Object.assign(defaultItem, details),
    }).promise()
}

function get(query) {
    return docClient.get({
        TableName,
        Key: query
    }).promise()
}

module.exports = {
    put,
    get
}