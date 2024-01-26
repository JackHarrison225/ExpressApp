# **Project Documentation**

## **Overview**
This project is a web application built using React (with Next.js) and Express.js. It features a game collection management system where users can register, log in, add games to their collection, update game details, and delete games. The frontend is built with React and Next.js, offering a responsive user interface, while the backend is an Express.js server that handles API requests for user authentication and game management.

## **Key Features**
- User Authentication: Register, Login, Logout
- Game Management: Add, Update, Delete games
- Responsive Frontend with Next.js
- Backend API with Express.js


## Frontend
The frontend is built with React and Next.js. The main components of the frontend include:

- **Home**:  The main component that handles routing between the login, registration, and landing pages.
- **Login**: Manages user login.
- **Register**: Handles user registration.
- **Landing**: The main dashboard for logged-in users, showing the game collection and options to add/update/delete games.


## Setup and Usage

**Installation**: Ensure you have Node.js installed. Clone the repository and install dependencies:
```
git clone <repository-url>
cd <project-directory>
npm install
Running the App: Start the development server:

```

```
npm run dev
Access the app at http://localhost:3000.
```

## **Backend**
The backend API is built with Express.js and handles user authentication and game management.

## **Key Endpoints**

### **User Authentication**
- POST /login: Authenticate and log in a user.
- POST /register: Register a new user.

### **Game Management**
- GET /games: Retrieve all games.
- POST /games/create: Add a new game.
- PUT /games/update/:id: Update a game.
- DELETE /games/delete/:id: Delete a game.

## **Setup and Usage**
Installation: Navigate to the backend directory and install dependencies:

```
cd backend
npm install
```

**Configuration**: Set up your environment variables in a .env file. 

## **Running the Server**: 

### Start the server:

```
npm start
The server will run on http://localhost:3001.
```
## Authentication
Authentication is managed using JWT tokens. The ApiClient class in the frontend handles authenticated API calls and includes methods for registration and login. User credentials are stored securely in the backend with password hashing.

## Data Models

### User Model
- username: Unique identifier for login.
- password: Hashed password for security.
- token: uuidV4 token for session management.

### Game Model
- gameName: Name of the game.
- releaseDate: Release date of the game.
- imageData: URL/link to the game's image.
- Played: Boolean to indicate if the user has played the game.
- Difficulty: Difficulty level of the game.

## Contributing
Contributions to this project are welcome. Please follow these steps:
- Fork the repository.
- Create a new branch for your feature.
- Commit your changes with clear commit messages.
- Push to the branch and open a pull request.


## Current Known Bugs
- Registration functionality issue (TypeError: Cannot read properties of undefined (reading 'register')).
- Login issues post-logout.
- Logout button not functioning as expected.
- JSON parsing error in Express.js.
- Inconsistencies in login function error handling.
- Unhandled runtime error on form submission.
- Issues with registering new users.
- Problems with token management in authentication flow.

## License
This project is licensed under the MIT License.
