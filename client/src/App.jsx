import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import './index.css'; 
export default function App () {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}