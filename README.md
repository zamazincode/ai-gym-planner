# AI Gym Planner

An AI-powered full-stack application that generates personalized workout plans based on each user's goals.

## Features

- Sign up/sign in and session management with Neon Auth
- Onboarding form to collect goal, level, equipment, session length, and split preference
- Weekly program generation via OpenRouter AI
- Plan versioning (version increases on each regeneration)
- Persistent storage for profiles and plans with PostgreSQL + Prisma

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Neon Auth UI

### Backend

- Bun + Express
- Prisma ORM
- PostgreSQL
- OpenAI SDK (using OpenRouter endpoint)

## Project Structure

```text
.
|- src/                 # Frontend (React)
|- server/
|  |- src/              # Backend (Express + Prisma)
|  |- prisma/           # Prisma schema and migration files
|- public/
|- README.md
```

## Requirements

- Node.js 20+
- Bun 1.1+
- PostgreSQL (local or cloud)
- Neon Auth project
- OpenRouter API key

## Environment Variables

Example files:

- Frontend: `.env.example`
- Backend: `server/.env.example`

Fill these with your own values and use them as `.env` files.

### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:3001
VITE_NEON_AUTH_URL=https://YOUR-NEON-AUTH-URL
```

### Backend (`server/.env`)

```env
PORT=3001
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/ai_gym_planner
OPEN_ROUTER_KEY=sk-or-v1-...
BASE_URL=http://localhost:5173
```

## Setup

### 1) Install frontend dependencies

```bash
bun install
```

### 2) Install backend dependencies

```bash
cd server
bun install
cd ..
```

### 3) Configure environment variables

1. Copy `.env.example` to `.env` in the root directory.
2. Copy `.env.example` to `.env` in the `server` directory.
3. Update values with your service credentials.

### 4) Apply database migrations

Inside the `server` folder:

```bash
bunx prisma migrate dev
```

Prisma Client will be generated automatically.

## Run

Open two terminals:

### Terminal 1 - Backend

```bash
cd server
bun run dev
```

Server: `http://localhost:3001`

### Terminal 2 - Frontend

```bash
npm run dev
```

App: `http://localhost:5173`

## API Endpoints

Base: `http://localhost:3001/api`

- `POST /profile`
    - Saves or updates the user profile.
- `POST /plan/generate`
    - Generates a new plan from the user profile and increments version.
- `GET /plan/current?userId=...`
    - Returns the latest plan for the user.

## App Flow

1. User signs up or signs in.
2. User completes onboarding form.
3. Backend saves the profile.
4. AI generates a plan and stores it in the database.
5. User sees full plan details on the profile page.

## Notes

- In `src/lib/api.ts`, a fallback API URL is used if `VITE_API_URL` is missing.
- `OPEN_ROUTER_KEY` is required for AI generation.
- Prisma connects via `DATABASE_URL`.

## Suggestions For Development

- Lock down CORS settings per environment
- Add request validation (for example, with zod)
- Centralize error logging
- Add testing setup (unit + integration)
