const express = require('express');
const app = express();
const PORT = process.env.PORT || 8008

app.get("/", (req, res) =>
{
	res.send({ by: 'buddy'});
})

//tells the app to listen on port 5000
app.listen(PORT, ()=>
{
	console.log("app is running")
})