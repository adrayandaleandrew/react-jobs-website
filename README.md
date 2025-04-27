# Job Posting Website

A simple job listing application built with React that allows users to browse, create, edit, and delete job postings.

## Features

- View all job listings
- Create new job postings
- Edit existing job postings
- Delete job postings
- Responsive design using TailwindCSS

## Technologies Used

- React 18
- React Router v6
- TailwindCSS
- Vite
- JSON Server (for mock backend)
- React Icons
- React Spinners
- React Toastify

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd react-jobs-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the mock API server

   ```bash
   npm run server
   # or
   yarn server
   ```

   This will start the JSON server on port 8001

2. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the Vite development server

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components for each route
- `/src/layouts` - Layout components for consistent page structure
- `/src/jobs.json` - Mock data for job listings

## Building for Production

```bash
npm run build
# or
yarn build
```

## Notes

This project was created as a learning exercise to practice React concepts including:

- Component composition
- Props and state management
- React hooks (useState, useEffect)
- Routing with React Router
- Styling with TailwindCSS
- Building with Vite

### NOTE: The data being displayed during the development of this short project came from a locally created JSON File
