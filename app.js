const express = require('express');
// the file does not return anything, so it does not need to be saved as a variable
passportConfig = require('./services/passport.js');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 8002

app.use('/auth/google', authRoutes);





//tells the app to listen on port 5000
app.listen(PORT, ()=>
{
	console.log("app is running", PORT)
})