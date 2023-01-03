const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:SkHKxtqcZ3GHIrt5@cluster0.ibxxlmg.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
 mongoDisconnect
};