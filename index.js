var chalk = require('chalk')
var emoji = require('node-emoji')

var typeList = ['info', 'error', 'warn', 'success']

function log () {
  var args = Array.prototype.slice.call(arguments)
  var type = 'info'
  var content = args
  if (typeList.join('').indexOf(args[0]) > -1) {
    type = args[0]
    content = args.slice(1)
    if (Object.prototype.toString.call(content[0]) === '[object Arguments]') {
      content = Array.prototype.slice.call(content[0])
    }
  }
  content = content.join(' ')
  var color = 'cyan'
  var prefix = emoji.get(':wave:') + '  [Info]'
  switch (type) {
    case 'error':
      color = 'red'
      prefix = emoji.get(':red_circle:') + '  [Error]'
      break;
    case 'warn':
      color = 'yellow'
      prefix = emoji.get(':warning:') + '  [Warning]'
      break;
    case 'normal':
      color = 'white'
      prefix = emoji.get(':point_right:') + '  [Well]'
      break;
    case 'success':
      color = 'green'
      prefix = emoji.get(':+1:') + '  [Success]'
      break
    default:
      break;
  }
  console.log(chalk[color](prefix), '',content)
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

module.exports = log
