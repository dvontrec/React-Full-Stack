const mongoose = require('mongoose');
// Saves the Schema from mongoose.
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

// will not export so testing does not break
mongoose.model('user', userSchema);
