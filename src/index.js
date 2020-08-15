'use strict'

const path = require('path')

module.exports = async function index (fastify, opts) {
    fastify.all('/', (request, reply) => reply.send('root'))
}
