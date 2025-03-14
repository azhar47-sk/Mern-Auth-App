# MERN Authentication App 🔐

A full-stack MERN (MongoDB, Express, React, Node.js) application for user authentication, featuring registration, login, and protected routes. Built with a modern UI using Tailwind CSS.

![MIT License](https://img.shields.io/badge/license-MIT-blue)

## Features ✨

- **User Registration**: Sign up with name, email, and password.
- **Secure Login**: JWT-based authentication for secure sessions.
- **Protected Routes**: Access profile pages only when authenticated.
- **Responsive Design**: Tailwind CSS for a clean, modern interface.
- **Input Validation**: Frontend and backend validation for forms.

## Technologies Used 🛠️

**Frontend**  
- React (Vite)
- Tailwind CSS
- React Router

**Backend**  
- Node.js & Express.js
- MongoDB (Database)
- JWT (Authentication)

**Tools**  
- Axios (API requests)
- Postman (Testing)
- Git (Version Control)

## Setup Instructions 🚀

### Prerequisites
- Node.js installed
- MongoDB running locally/remotely
- Git (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/azhar47-sk/Mern-Auth-App.git
cd Mern-Auth-App

### 2. Install Dependencies
Backend
```bash
cd server
npm install

Frontend
```bash
cd ../client
npm install

### 3. Configure Environment Variables
Create a .env file in server/:
```bash
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000

Update the frontend API URL in client/src/services/authService.js:
```bash
const API_URL = 'http://localhost:5000/auth'; // Ensure this matches your backend port

### 4. Run the Application
Start Backend
```bash
cd server
npm start

Start Frontend
```bash
cd ../client
npm run dev

Visit http://localhost:5173 in your browser.

##Folder Structure 📁

##Backend (server/)
```bash
server/
├── controllers/    # Route handlers (authController.js)
├── models/         # MongoDB schemas (User.js)
├── routes/         # API endpoints (authRoutes.js)
├── middleware/     # Auth middleware (authMiddleware.js)
├── server.js       # Backend entry point
└── .env            # Environment variables

###Frontend (client/)

```bash
client/
├── src/
│   ├── components/ # React components (Login, Register, Profile)
│   ├── services/   # API services (authService.js)
│   ├── App.jsx     # Main component
│   └── main.jsx    # Frontend entry point
├── public/         # Static assets
└── tailwind.config.js # Tailwind config

## API Endpoints 🌐

| Endpoint           | Method | Description                          |
|--------------------|--------|--------------------------------------|
| `/auth/register`   | POST   | Register a new user with credentials |
| `/auth/login`      | POST   | Authenticate user and return JWT     |
| `/auth/profile`    | GET    | Fetch authenticated user's profile   |

## Scripts 📜

| Command                | Description                                   | Execution Path       |
|------------------------|-----------------------------------------------|----------------------|
| `npm install`          | Install backend dependencies                  | `/server` directory  |
| `npm start`            | Start the backend server (port 5000)          | `/server` directory  |
| `npm run dev`          | Start Vite dev server for frontend (port 5173)| `/client` directory  |
| `npm run build`        | Build production-ready frontend assets         | `/client` directory  |

## 🌟 Why This Matters 

Authentication is the gateway to secure digital experiences. By building this project, we aim to:
- Provide a clean, scalable template for MERN authentication
- Demonstrate best practices for JWT security
- Empower developers to focus on building features rather than auth setup

## 💌 Get Involved!

**Your journey doesn't end here!**  
👉 Found a bug? [Open an issue](https://github.com/azhar47-sk/Mern-Auth-App/issues)  
👉 Want to enhance security? [Submit a PR](https://github.com/azhar47-sk/Mern-Auth-App/pulls)  
👉 Have questions? Reach out at `youremail@domain.com`

**Star the repo** ⭐ if this helped you - it motivates us to keep creating open-source magic!

---

**Secure authentication shouldn't be rocket science** 🚀  
*Start building with confidence today!*