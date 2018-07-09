const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
// the file does not return anything, so it does not need to be saved as a variable
require('./models/user');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 8002;

// Connects to the remote database and clears URLParse error
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

const app = express();

//tells express that we will be using cookies
app.use(cookieSession({
	maxAge: 30 * 24 * 60 * 60 * 1000,  //saves the cookie for 30 days 24 hours in a day 60 minutes in an hour 60 seconds in a minute 1000 milliseconds in a second
	// encrypts the cookie
	keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/google', authRoutes);

//tells the app to listen on the environment port 
app.listen(PORT, ()=>
{
	console.log("app is running", PORT)
})