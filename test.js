var log = require('./')

describe('test log', () => {
  it('should return function', () => {
    log.should.be.Function()
  })
  it('should return object', () => {
    log.info('This is a info').type.should.equal('info')
  })
  it('shoud return text', () => {
    log.text('info', 'only text and type').content.should.equal('info only text and type')
  })
})
