const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin1:9Dy2Ebrp@cluster0.js9g8uo.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDatabase;
