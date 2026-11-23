# SmartRide – Ride Booking and Management Web Application

A full-stack website prototype for the Open Innovation project.

## Features
- Responsive React website
- User registration and login
- Password hashing with bcryptjs
- JWT-based authentication
- Ride request creation
- Ride history for signed-in users
- MongoDB persistence
- Demo fare estimates for Go, Sedan and XL ride categories

> This is an academic prototype. It does not provide real-time driver dispatch, live GPS tracking, online payments, or a production taxi service.

## Technology
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas + Mongoose
- Authentication: bcryptjs + JSON Web Token

## Project structure
```text
SmartRide/
├── client/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── .env.example
├── .gitignore
└── README.md
```

## Run locally

### 1. Requirements
Install Node.js (LTS recommended) and have a MongoDB Atlas connection string.

### 2. Configure environment
Copy `.env.example` to `.env` in the project root and fill in:
- `MONGODB_URI`: your MongoDB connection string
- `JWT_SECRET`: a long random secret

Never upload `.env` to GitHub or share its contents.

### 3. Start backend
Open a terminal in the project root:
```bash
cd server
npm install
npm run dev
```
Backend runs at `http://localhost:5000`.

### 4. Start frontend
Open a second terminal in the project root:
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## API routes
- `GET /api/health` – API health check
- `POST /api/auth/register` – create account
- `POST /api/auth/login` – log in
- `GET /api/auth/me` – current signed-in user
- `POST /api/rides` – create a ride request (JWT required)
- `GET /api/rides/my` – get signed-in user's ride history (JWT required)

## Notes
- The fare is a demonstration estimate, not a live market quote.
- Use a separate strong database password and JWT secret.
- For deployment, configure the same environment variables in the backend host and set `VITE_API_URL` in the frontend host to the deployed backend URL.
