const express = require('express')
const app = express()

// Bodyparser middleware
app.use(express.json())

// Use routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/flights', require('./routes/api/flights'))
app.use('/api/aircraft', require('./routes/api/aircraft'))

// Get our port (default 5000)
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World'))

// Start the server
app.listen(port, () => console.log(`App listening on PORT: ${port}`))
