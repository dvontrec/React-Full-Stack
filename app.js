const express = require('express');
const mongoose = require('mongoose');
// the file does not return anything, so it does not need to be saved as a variable
require('./services/passport.js');
require('./models/user');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 8002;

mongoose.connect(process.env.DB_HOST);

app.use('/auth/google', authRoutes);





//tells the app to listen on port 5000
app.listen(PORT, ()=>
{
	console.log("app is running", PORT)
})