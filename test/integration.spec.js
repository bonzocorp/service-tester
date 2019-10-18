const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

chai.use(chaiHttp)
chai.should()

let vault = require('node-vault')({
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN
  })

vault.mount({ mount_point: 'kv', type: 'kv', version: '1'})

describe('integration', () => {
  describe('can read and write secret from vault ', () => {
    it('should retrive data from vault', async ()=> {
      const secret = getRandomInt(9999)

      let res = await chai.request(app)
        .post('/vault')
        .send({
          path: 'kv/foo',
          value: secret
        })

      res.should.have.status(200)

      res = await chai.request(app)
        .get('/vault')
        .query({ path: 'kv/foo' })

      res.should.have.status(200)
      res.body.value.should.equal(secret)
    })
  })
})
