//figures out which keys to return
if(process.env.NODE_ENV === 'production')
{
	module.exports = require('./prod');
}
else
{
	//returns the dev keys
	module.exports = require('./dev');
}