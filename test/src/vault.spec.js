
const chai = require('chai')
const vaultService = require('../../lib/vault-service')
const vault = require('vault')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
chai.should()

describe('vaultService', () => {
  before(() => {
    sinon.stub(vault, 'write')
  })

  describe('#write', () => {
    it('should write a value from vault', (done) => {
    })
  })
})
