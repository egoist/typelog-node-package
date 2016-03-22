'use strict'
var chalk = require('chalk')
var figures = require('figures')

var log = module.exports = {}

log.info = function () {
  var args = [].slice.call(arguments)
  args = [chalk.cyan(figures.info), chalk.cyan(fillString('Info'))].concat(args)
  process.exitCode = 0
  console.log.apply(console.log, args)
}

log.error = function () {
  var args = [].slice.call(arguments)
  args = [chalk.red(figures.cross), chalk.red(fillString('Error'))].concat(args)
  process.exitCode = 1
  console.log.apply(console.log, args)
}

log.warn = function () {
  var args = [].slice.call(arguments)
  args = [chalk.yellow(figures.warning), chalk.yellow(fillString('Warn'))].concat(args)
  process.exitCode = 0
  console.log.apply(console.log, args)
}

log.success = function () {
  var args = [].slice.call(arguments)
  args = [chalk.green(figures.tick), chalk.green(fillString('Success'))].concat(args)
  process.exitCode = 0
  console.log.apply(console.log, args)
}

log.heading = function () {
  var args = [].slice.call(arguments)
  args = [chalk.cyan(figures.pointer.repeat(5))].concat(args)
  process.exitCode = 0
  console.log.apply(console.log, args)
}

function fillString(text, max) {
  text += ':'
  return text
}
