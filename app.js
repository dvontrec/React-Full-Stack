const express = require('express');
const mongoose = require('mongoose');
// the file does not return anything, so it does not need to be saved as a variable
require('./models/user');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 8002;

// Connects to the remote database and clears URLParse error
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

const app = express();

app.use('/auth/google', authRoutes);

//tells the app to listen on the environment port 
app.listen(PORT, ()=>
{
	console.log("app is running", PORT)
})