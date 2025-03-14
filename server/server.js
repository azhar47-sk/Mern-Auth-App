const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Models
const User = require('./models/User');

// Routes
const authRoutes = require('./routes/auth');

// Initialize app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);

// 1st route
app.get('/',(req,res)=>{
    res.send('Server is running!');
});

app.post('/test', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).send('User saved successfully!');
    } catch (err) {
      res.status(400).send('Error saving user: ' + err.message);
    }
  });
  

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
