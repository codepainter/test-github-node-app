'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')

// Instantiate Fastify with some config
const app = Fastify({
    logger: true,
    pluginTimeout: 10000
})

// Register your application as a normal plugin.
app.register(require('./index.js'))

// Start listening.
const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})
