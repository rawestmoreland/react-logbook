const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

// Bodyparser middleware
app.use(express.json())

// DB Config
const db = config.get('mongoURI')

// Connect to mongo
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('MongoBD Connected...'))
	.catch(err => console.log(err))

// Use routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/flights', require('./routes/api/flights'))
app.use('/api/aircraft', require('./routes/api/aircraft'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// Get our port (default 5000)
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World'))

// Start the server
app.listen(port, () => console.log(`App listening on PORT: ${port}`))
