const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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