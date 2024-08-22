const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./src/api')
const { mongooseConnect } = require('./src/services/mongo')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.use('/api', api)

async function reloadDB() {
  await mongooseConnect()
}

reloadDB();

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
