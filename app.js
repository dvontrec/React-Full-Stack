const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const PORT = process.env.PORT || 8008
require('dotenv').config();

// tells passport how to authenticate with the google oauth strategy
passport.use(new GoogleStrategy({
	//passes the id and secret for this application
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	//sets up the rout the user goes to after login
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) =>
	{
		console.log('access token', accessToken);
		console.log('refresh token', refreshToken);
		console.log('profile', profile);
	})
);

//authentication with google route
app.get('/auth/google', 
	passport.authenticate('google',		//tells the route to authenticate the user with google 
	{
		// asks google to give access to th eusers profile and emails
		scope: ['profile', 'email']
	})
);

// When user is logged in they 
app.get('/auth/google/callback', passport.authenticate('google'));

//tells the app to listen on port 5000
app.listen(PORT, ()=>
{
	console.log("app is running")
})