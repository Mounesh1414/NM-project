const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const blogRoutes = require('./Routes/blogRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
}).catch(err => console.log(err));
