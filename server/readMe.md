# 📰 NewsLens Backend API

A production-ready RESTful backend for **NewsLens**, a personalized news application built with **Node.js**, **Express.js**, and **MongoDB**. The API provides secure authentication, real-time news integration using the GNews API, bookmarking, reading history management, Swagger documentation, Docker support, and a scalable modular architecture.

---

## 🚀 Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📰 Latest News Headlines
- 🔍 Search News by Keyword
- 🏷️ Browse News by Topic
- ⭐ Bookmark Articles
- 🕒 Reading History Management
- 📄 Swagger API Documentation
- ✅ Request Validation
- ⚡ Global Error Handling
- 📝 Centralized Logging
- 🐳 Docker & Docker Compose Support
- 🧪 Unit & API Testing (Jest + Supertest)
- 🛡️ Helmet Security
- 🚦 Rate Limiting
- 🌐 CORS Support
- 📦 Modular & Scalable Architecture

---

# 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password Hashing | bcryptjs |
| HTTP Client | Axios |
| Validation | Joi |
| API Documentation | Swagger |
| Logging | Morgan + Custom Logger |
| Security | Helmet |
| Testing | Jest, Supertest |
| Containerization | Docker, Docker Compose |

---

# 📁 Project Structure

```text
server
│
├── src
│   ├── config/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── modules/
│   │   ├── auth/
│   │   ├── news/
│   │   ├── bookmarks/
│   │   └── history/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env.example
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/Ujwal1256/NewsLens.git

cd server
```

## Install dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=mongodb://127.0.0.1:27017/newslens

JWT_SECRET=your_jwt_secret

GNEWS_API_KEY=your_gnews_api_key
```

## Start the Server

```bash
npm start
```

The server will start on:

```
http://localhost:5000
```

---

# 🐳 Docker

## Build Docker Image

```bash
docker build -t newslens-backend .
```

## Run Docker Container

```bash
docker run -p 5000:5000 newslens-backend
```

## Run with Docker Compose

```bash
docker compose up --build
```

## Stop Containers

```bash
docker compose down
```

---

# 📖 API Documentation

Swagger documentation is available at:

```
http://localhost:5000/api-docs
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register User |
| POST | `/api/v1/auth/login` | Login User |
| GET | `/api/v1/auth/profile` | Get User Profile |

---

## News

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/news/headlines` | Get Top Headlines |
| GET | `/api/v1/news/search?q=technology` | Search News |
| GET | `/api/v1/news/topics/:topic` | News by Topic |

---

## Bookmarks

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/bookmarks` | Save Bookmark |
| GET | `/api/v1/bookmarks` | Get Bookmarks |
| DELETE | `/api/v1/bookmarks/:id` | Delete Bookmark |

---

## History

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/history` | Add History |
| GET | `/api/v1/history` | Get Reading History |
| DELETE | `/api/v1/history/:id` | Delete History Item |
| DELETE | `/api/v1/history` | Clear Reading History |

---

# 🔐 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer <your_jwt_token>
```

---

# 🧪 Running Tests

```bash
npm test
```

---

# 🛡️ Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Helmet Security Headers
- Rate Limiting
- Request Validation
- Global Error Handling
- Environment Variable Management
- CORS Configuration

---

# 📦 Production Features

- Modular MVC Architecture
- Service Layer Pattern
- RESTful API Design
- Docker Support
- Docker Compose
- Swagger Documentation
- Custom Logger
- Centralized API Responses
- Centralized Error Handling
- Environment-based Configuration

---

# 🚀 Deployment

The backend can be deployed to:

- Render
- Railway
- Fly.io
- DigitalOcean
- AWS EC2

---

# 🔮 Future Enhancements

- Refresh Token Authentication
- Email Verification
- Forgot Password
- Redis Caching
- News Recommendation Engine
- User Preferences
- Admin Dashboard
- CI/CD Pipeline
- Kubernetes Deployment

---

# 👨‍💻 Author

**Ujwal Jakhamate**

- GitHub: https://github.com/<your-username>
- LinkedIn: https://linkedin.com/in/<your-linkedin>

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ If you found this project helpful, consider giving it a star on GitHub!