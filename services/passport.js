const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');


// fetches the user model from database
const User = mongoose.model('user');

// saves the user id in a cookie for the session
passport.serializeUser((user, done) =>
{
	done(null, user.id);
})

// gets the user from the id stored in the cookie
passport.deserializeUser((id, done) =>
{
	User.findById(id)
		.then(user =>
		{
			done(null,user);
		});
})

//tells passport to use cookies to manage authentication

// tells passport how to authenticate with the google oauth strategy
passport.use(new GoogleStrategy({
	//passes the id and secret for this application
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	//sets up the rout the user goes to after login
	callbackURL: '/auth/google/callback',
	//tells google auth to trust proxies. helps when hosted
	proxy: true
}, (accessToken, refreshToken, profile, done) =>
	{
		// Searches the database for the logged in user, returns a promise
		User.findOne({googleId: profile.id})
			.then((existingUser) => 
			{
				// if the user already exista
				if(existingUser)
				{
					done(null, existingUser);
				}
				//if the user is a new user
				else
				{
					//saves the user to the database
					new User({ googleId: profile.id}).save()
						.then(user => done(null, user));

				}
			});
	})
);