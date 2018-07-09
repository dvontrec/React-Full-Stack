const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();

// fetches the user model from database
const User = mongoose.model('user');

// tells passport how to authenticate with the google oauth strategy
passport.use(new GoogleStrategy({
	//passes the id and secret for this application
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	//sets up the rout the user goes to after login
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) =>
	{
		//saves the user to the database
		new User({ googleId: profile.id}).save();
	})
);