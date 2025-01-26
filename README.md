# Building Compliance Checker 
## Overview

The **Building Compliance Checker project** is a demonstration of both frontend and backend engineering skills. This application simulates the process of validating building elements for compliance with pre-defined rules, similar to functionality that might be used in architectural or engineering software like Revit.

Through this project, I aim to:

- Showcase my ability to create and consume a REST API using Express.js.
- Demonstrate dynamic frontend functionality using React.
- Apply my knowledge of state management and API integration in a practical application.

## Features
1. Backend (Express.js):

- A RESTful API that accepts building element submissions.
- Validates elements based on mock compliance rules.
- Returns detailed validation results for each element.
2. Frontend (React):

- A React-based dashboard that:
- Allows users to "submit" building elements.
- Displays a list of submitted elements along with their validation status.
- Dynamically fetches and renders data from the backend.
3. Validation Rules:

### Example rules used in the application:
-  Stairs: Must have a height between 34–38 inches.
-  Doors: Must be at least 32 inches wide.
-  These rules mimic real-world building code constraints.
## Project Architechture
This project is divided into two main components:
1. Frontend (React + Vite):
   - Provides a user-friendly interface for interacting with the API.
   - Displays building elemnet validation results dynamically.
2. Backend (Express.js):
   - Servers as the API to handle building element submissions.
   - Performs validation logic and returns results to the frontend
## File Structure
your-project/
├── backend/                # All backend (Express.js) code
│   ├── server.js           # Main server file
│   ├── routes/             # (Optional) Folder for route handlers
│   ├── models/             # (Optional) Folder for database models
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   └── README.md           # Backend-specific documentation
├── frontend/               # All frontend (React + Vite) code
│   ├── public/             # Static files
│   │   ├── index.html      # Entry point for the React app
│   ├── src/                # React source code
│   │   ├── App.jsx         # Main application component
│   │   ├── components/     # Reusable React components
│   │   └── styles/         # (Optional) CSS/SCSS files
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   └── README.md           # Frontend-specific documentation
├── .gitignore              # Ignore unnecessary files
├── package.json            # Root-level scripts
└── README.md               # Project documentation


