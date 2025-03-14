const express = require('express');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash Password
        const hashedPassword = await bycrpt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: 'User registered successfully!', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find User
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        // verify password
        const isPasswordValid = await bycrpt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})

router.get('/profile', verifyToken, async (req, res) => {
    try {
        // Fetch the full user details from the database
        const user = await User.findById(req.user.id).select('-password'); // Exclude the password field
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the full user data to the frontend
        res.status(200).json({ message: 'Profile fetched successfully', user });
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;