import React, { useState } from 'react';
import { register } from '../services/authService'; // Import the register API function
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // Track if the message is an error
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is being submitted

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions
    setIsSubmitting(true);

    // Basic input validation
    if (!name || !email || !password) {
      setMessage('All fields are required.');
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await register({ name, email, password }); // Call backend API

      // Store the token in localStorage
      localStorage.setItem('token', response.token);

      setMessage(response.message || 'User registered successfully!');
      setIsError(false);

      // Redirect to profile page on success
      navigate('/profile');
    } catch (error) {
      console.error('Registration error:', error);
      setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              isError ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
