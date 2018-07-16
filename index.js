#!/usr/bin/env node
'use strict'

const arrayShuffle = require('array-shuffle')
const meow = require('meow')
const updateNotifier = require('update-notifier')
const Table = require('cli-table3')

const cli = meow(
  `
  Usage:
    $ lomachenko

  Options:
    -h, --help                    show help options
    -v, --version                 show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

updateNotifier({ pkg: cli.pkg }).notify()

const run = () => {
  const arr = length => [...new Array(length)].map((m, i) => i + 1)
  const shuffled = arrayShuffle(arr(25))
  const table = new Table()

  table.push(
    shuffled.slice(0, 5),
    shuffled.slice(5, 10),
    shuffled.slice(10, 15),
    shuffled.slice(15, 20),
    shuffled.slice(20, 25)
  )

  console.log(table.toString())
}

run()
