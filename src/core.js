'use strict'

//

const chalk     = require('chalk')
const clear     = require('clear')
const figlet    = require('figlet')
const ingest    = require('./lib/ingest')
const screen    = require('./lib/console')

clear()
console.log(chalk.green(figlet.textSync('Datum', { horizontalLayout: 'full' })))
console.log(chalk.green('\xA9 Datum Copier, Kieran Maher 2019.\n'))

const run = async () => {
    const locations = await ingest.ingestAll()
    //screen.sourceExists(locations.source)
}

run()