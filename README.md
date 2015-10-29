# typelog

[![NPM version](https://img.shields.io/npm/v/typelog.svg?style=flat-square)](https://www.npmjs.com/package/typelog)
[![NPM download](https://img.shields.io/npm/dm/typelog.svg?style=flat-square)](https://www.npmjs.com/package/typelog)
[![David Status](https://img.shields.io/david/egoist/typelog.svg?style=flat-square)](https://david-dm.org/egoist/typelog)

Imagine logging everything in your console with a type.

![preview](http://ww4.sinaimg.cn/large/a15b4afegw1exi2ljyh8kj20gd0aagn2.jpg)

## Usage

For `node >= 4.0.0`

```javascript
const log = require('log')

log.info('I\'m some information', 'hah?')
log.error('You did something that wrong')
log.warn('Please do not hate me')
log.success('You finally got that girlfriend')

// alternatives
log('info', 'write type inside function', 'is ok', 'too')

// do not show type, it's ugly
log('only content and a lovely emoji')
```

## License

MIT.
