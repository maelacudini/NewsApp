const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Server.js started.'))
app.use('/api/news', require('./api/news'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))