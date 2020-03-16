const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Bodyparser middleware
app.use(express.json());

// DB Config
connectDB();

// Use routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/flights', require('./routes/flights'));
app.use('/api/v1/aircraft', require('./routes/aircraft'));
app.use('/api/v1/auth', require('./routes/auth'));

// Use morgan if in development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Get our port (default 5000)
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World'));

// Start the server
app.listen(
	port,
	console.log(
		`Server running in ${process.env.NODE_ENV} on PORT: ${port}`.yellow.bold
	)
);
