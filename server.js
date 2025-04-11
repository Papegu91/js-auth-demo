const express = require('express'); 
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// ✅ Add this route just below express setup
app.get('/', (req, res) => {
  res.send('Welcome to JS Auth Demo API!');
});

// Register your auth routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/js-auth-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
})
.catch(err => console.error('MongoDB connection error:', err));
