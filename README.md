# typelog

[![NPM version](https://img.shields.io/npm/v/typelog.svg?style=flat-square)](https://www.npmjs.com/package/typelog)
[![NPM download](https://img.shields.io/npm/dm/typelog.svg?style=flat-square)](https://www.npmjs.com/package/typelog)
[![David Status](https://img.shields.io/david/egoist/typelog.svg?style=flat-square)](https://david-dm.org/egoist/typelog)

Imagine logging everything in your console with a type.

![preview](https://ooo.0o0.ooo/2016/03/21/56f0c0988384a.png)

## Usage

For `node >= 4.0.0`

```javascript
const log = require('typelog')

// exitCode: 0
log.info('I\'m some information', 'hah?')
log.warn('Please do not hate me')
log.success('You finally got that girlfriend')

// exitCode: 1
log.error('You did something that wrong')

// heading title
log.heading('heading')
//=> ❯❯❯❯❯ heading
```

## License

MIT.
