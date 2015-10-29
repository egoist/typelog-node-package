var log = require('./')

describe('test log', () => {
  it('should return function', () => {
    log.should.be.Function()
  })
  it('should return object', () => {
    log.info('This is a info').type.should.equal('info')
  })
})
