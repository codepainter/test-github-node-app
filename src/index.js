'use strict'

const path = require('path')

module.exports = async function (fastify, opts) {
    fastify.all('/', (request, reply) => reply.send('root'))
}
