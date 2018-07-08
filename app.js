const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const PORT = process.env.PORT || 8008
require('dotenv').config();

// tells passport how to authenticate with the google oauth strategy
// passport.use(new GoogleStrategy())


//tells the app to listen on port 5000
app.listen(PORT, ()=>
{
	console.log("app is running", PORT);
})