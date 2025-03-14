import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../services/authService'; // API call to fetch user data
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null); // Store user data
  const [error, setError] = useState(''); // Handle errors
  const [loading, setLoading] = useState(true); // Handle loading state
  const navigate = useNavigate(); // Navigate to login if not authenticated

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem('token'); // Retrieve the JWT token
      if (!token) {
        setError('Access denied. Please log in.');
        navigate('/login'); // Redirect to login page if no token
        return;
      }

      try {
        const response = await fetchProfile(token); // Call backend to fetch profile data
        setUser(response.user); // Set user data
      } catch (err) {
        setError('Failed to fetch profile. Please log in again.');
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/login'); // Redirect to login
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded shadow-md">
          <h2 className="text-xl font-bold text-red-500">{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome, {user ? user.name : 'User'}!
        </h2>
        {user && (
          <div className="text-left space-y-4">
            <p className="text-gray-600">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;