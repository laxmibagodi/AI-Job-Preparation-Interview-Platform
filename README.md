# 🚀 AI Job Preparation & Interview Platform

An intelligent, AI-powered interview preparation and job interview platform that leverages cutting-edge generative AI to help candidates prepare for technical interviews, practice mock interviews, and receive personalized feedback.

<div align="center">

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Node.js](https://img.shields.io/badge/node.js-v18+-339933?logo=node.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)

</div>

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🤖 AI-Powered Interview Preparation
- **Smart Interview Generation**: Create realistic interview questions powered by Google GenAI
- **Mock Interviews**: Practice with AI interviewers that simulate real interview scenarios
- **Real-time Feedback**: Get instant AI-powered feedback on your answers

### 👤 User Management
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **User Profiles**: Manage interview history and performance metrics
- **Interview Reports**: Detailed analysis of interview performance

### 📊 Interview Management
- **Interview Sessions**: Create, manage, and track interview sessions
- **Question Categories**: Support for various job roles and question types
- **Performance Analytics**: Track progress and improvement over time

### 📄 Advanced Features
- **PDF Support**: Upload and analyze resume/document PDFs
- **File Processing**: Handle various file formats for interview context
- **Session Persistence**: Save and resume interview sessions

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcryptjs
- **AI Integration**: Google GenAI SDK
- **File Processing**: Multer, Puppeteer, pdf-parse
- **Validation**: Zod
- **Security**: CORS, Cookie Parser

### Frontend
- **Framework**: React 19.2.0
- **Routing**: React Router 7.13.0
- **HTTP Client**: Axios
- **Build Tool**: Vite 7.3.1
- **Styling**: SASS
- **Linting**: ESLint with React plugins

### DevTools
- **Backend Monitoring**: Nodemon
- **Code Quality**: ESLint, React Hooks Linter

---

## 📁 Project Structure

```
AI-Job-Preparation-Interview-Platform/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js           # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── auth.controller.js    # Authentication logic
│   │   │   └── interview.controller.js # Interview operations
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js    # JWT verification
│   │   │   └── file.middleware.js    # File upload handling
│   │   ├── models/
│   │   │   ├── user.model.js         # User schema
│   │   │   ├── interviewReport.model.js # Report schema
│   │   │   └── blacklist.model.js    # Token blacklist
│   │   ├── routes/
│   │   │   ├── auth.routes.js        # Auth endpoints
│   │   │   └── interview.routes.js   # Interview endpoints
│   │   ├── services/
│   │   │   └── ai.service.js         # AI/GenAI integration
│   │   └── app.js                    # Express app setup
│   ├── server.js                     # Server entry point
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── pages/            # Login, Register
│   │   │   │   ├── components/       # Protected route
│   │   │   │   ├── hooks/            # useAuth hook
│   │   │   │   ├── services/         # Auth API
│   │   │   │   └── context/          # Auth context
│   │   │   └── interview/
│   │   │       ├── pages/            # Interview UI
│   │   │       ├── hooks/            # useInterview hook
│   │   │       └── context/          # Interview context
│   │   ├── App.jsx                   # Main App component
│   │   ├── app.routes.jsx            # Route configuration
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Git**

### Required APIs/Keys
- **Google GenAI API Key** - Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/laxmibagodi/AI-Job-Preparation-Interview-Platform.git
cd "AI-Job-Preparation-Interview-Platform"
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interview-ai?retryWrites=true&w=majority
# Or for local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/interview-ai

# AI Configuration
GOOGLE_GENAI_API_KEY=your_google_genai_api_key_here

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRY=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

Create a `.env` file in the Frontend directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## ⚙️ Configuration

### Backend Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` \| `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `GOOGLE_GENAI_API_KEY` | Google GenAI API key | `AIzaSy...` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key` |
| `JWT_EXPIRY` | JWT token expiry | `7d` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

### Frontend Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:5000` |

---

## 🏃 Running the Application

### Development Mode

#### Backend Server

```bash
cd Backend
npm run dev
# Server runs on http://localhost:5000
```

#### Frontend Development Server

In a new terminal:

```bash
cd Frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### Production Build

#### Backend

```bash
cd Backend
npm run build  # If applicable
NODE_ENV=production npm start
```

#### Frontend

```bash
cd Frontend
npm run build
npm run preview
```

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123",
  "fullName": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "fullName": "John Doe"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "fullName": "John Doe"
    }
  }
}
```

#### Logout User
```http
POST /api/auth/logout
Authorization: Bearer {token}
```

### Interview Endpoints

#### Start Interview
```http
POST /api/interview/start
Authorization: Bearer {token}
Content-Type: application/json

{
  "jobRole": "Software Engineer",
  "experience": "5 years",
  "level": "mid-level"
}
```

#### Get Interview Questions
```http
GET /api/interview/questions?sessionId={sessionId}
Authorization: Bearer {token}
```

#### Submit Answer
```http
POST /api/interview/answer
Authorization: Bearer {token}
Content-Type: application/json

{
  "sessionId": "session_id",
  "questionId": "question_id",
  "answer": "User's answer text"
}
```

#### Get Interview Report
```http
GET /api/interview/report/{sessionId}
Authorization: Bearer {token}
```

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs
- ✅ CORS protection
- ✅ Environment variable protection
- ✅ Token blacklist for logout
- ✅ Input validation with Zod
- ✅ Secure file upload handling

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Add comments for complex logic
- Ensure all new features are tested
- Update documentation as needed

---

## 📝 Environment Setup Tips

### MongoDB Atlas Setup
1. Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Replace credentials in `.env`

### Google GenAI Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add to your `.env` file as `GOOGLE_GENAI_API_KEY`

---

## 🐛 Troubleshooting

### Backend Connection Issues
- Ensure MongoDB is running or you have valid MongoDB Atlas credentials
- Check that `MONGODB_URI` is correct in `.env`
- Verify API key is set correctly

### Frontend API Errors
- Ensure backend is running on the correct port
- Check `VITE_API_BASE_URL` matches your backend URL
- Clear browser cache and rebuild if needed

### CORS Errors
- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check CORS middleware configuration

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@laxmibagodi](https://github.com/laxmibagodi)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Google GenAI for powerful language models
- MongoDB for reliable database solutions
- The React and Node.js communities

---

## 📧 Support

For support, email your.email@example.com or open an issue on GitHub.

---

<div align="center">

**[⬆ back to top](#-ai-job-preparation--interview-platform)**

Made with ❤️ by [Your Name]

</div>
