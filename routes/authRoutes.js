const express = require('express');
const passport = require('passport');
const router = express.Router();

//authentication with google route
router.get('/', 
	passport.authenticate('google',		//tells the route to authenticate the user with google 
	{
		// asks google to give access to th eusers profile and emails
		scope: ['profile', 'email']
	})
);

// When user is logged in they 
router.get('/callback', passport.authenticate('google'));

module.exports = router;
