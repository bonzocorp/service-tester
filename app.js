const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 8000

const vault = require('node-vault')({
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN
  })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/vault', async (req, res) => {
   try {
    const vaultResponse = await vault.write(req.body.path, { value: req.body.value, lease: '10h' })
    res.json('')
  } catch (e) {
    console.error('Error writting to vault:', e)
  }
})

app.get('/vault', async (req, res) => {
  try {
    const {data} = await vault.read(req.query.path)
    res.json(data)
  } catch (e) {
    console.error('Error reading from vault:', e)
  }
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})


module.exports = app
