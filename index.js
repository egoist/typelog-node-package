var chalk = require('chalk')
var emoji = require('node-emoji')

var typeList = ['normal', 'info', 'error', 'warn', 'success']

function log () {
  var args = Array.prototype.slice.call(arguments)
  var type = 'normal'
  var content = args
  if (typeList.join('').indexOf(args[0]) > -1) {
    type = args[0]
    content = args.slice(1)
    if (Object.prototype.toString.call(content[0]) === '[object Arguments]') {
      content = Array.prototype.slice.call(content[0])
    }
  }
  content = content.join(' ')
  var color = 'white'
  var prefix = ''
  switch (type) {
    case 'error':
      color = 'red'
      prefix = '[Error]  '
      break;
    case 'warn':
      color = 'yellow'
      prefix = '[Warning]  '
      break;
    case 'info':
      color = 'cyan'
      prefix = '[Info]  '
      break;
    case 'success':
      color = 'green'
      prefix = '[Success]  '
      break
    default:
      break;
  }
  prefix = getEmoji(type) + prefix
  console.log(chalk[color](prefix) + content)
  return {
    type: type,
    content: content
  }
}

log.info = function () {
  return log.call(this, 'info', arguments)
}

log.error = function () {
  return log.call(this, 'error', arguments)
}

log.warn = function () {
  return log.call(this, 'warn', arguments)
}

log.success = function () {
  return log.call(this, 'success', arguments)
}

function getEmoji (type) {
  var emojis = {
    'info': ':wave:',
    'warn': ':warning:',
    'success': ':+1:',
    'normal': ':point_right:',
    'error': ':red_circle:'
  }
  var chars = {
    'info': 'i',
    'warn': '‼',
    'success': '√',
    'normal': '',
    'error': '×'
  }
  var append = process.platform === 'win32' ? ' ' : '  '
  if (type === 'normal') {
    append = ''
  }
  return (process.platform === 'win32' ? chars[type] : emoji.get(emojis[type])) + append
}

module.exports = log
