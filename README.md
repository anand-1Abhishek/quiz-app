
# Quiz Application - RESTful API

This is a Node.js and Express.js-based RESTful API for managing quizzes and user authentication. Users can register, log in, create quizzes, take quizzes, and view their results. It uses MongoDB as the database, with JWT-based authentication.

## Features:
- **User Authentication** (Register/Login)
- **MCQ Quiz Management** (Create Quiz, Fetch Quizzes, Fetch Quiz Details)
- **Taking a Quiz and Viewing Results**

## Technologies Used:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

---

## Getting Started

### Prerequisites:
- Node.js installed
- MongoDB installed and running locally or hosted (e.g., MongoDB Atlas)
- Postman or similar tool for API testing

### Installation Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anand-1Abhishek/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a \`.env\` file in the root directory with the following content:

   ```env
   MONGO_URI=mongodb+srv://abhishekanand19472001:eX2bs5nLkI4G6slq@cluster0.ycpx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=jklirt
   ```



4. **Run the application:**

   Start the server:

   ```bash
   npm start
   ```

   The application will start at \`http://localhost:3000`.

---

## API Endpoints

### User Authentication

#### 1. **Register User**
- **URL**: \`POST http://localhost:3000/api/auth/register`
- **Body**:
  ```json
  {
    "username": "Anand",
    "email": "anand@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns user data and JWT token.

#### 2. **Login User**
- **URL**: \`POST http://localhost:3000/api/auth/login`
- **Body**:
  ```json
  {
    "email": "anand@example.com",
    "password": "password123"
  }
  ```
- **Response**: Returns user data and JWT token.

### Quiz Management

#### 3. **Create a Quiz** (Requires Authentication)
- **URL**: \`POST http://localhost:3000/api/quizzes`
- **Headers**: \`Authorization: Bearer <JWT_TOKEN>\`
- **Body**:
  ```json
  {
    "title": "JavaScript Basics",
    "description": "Test your knowledge of basic JavaScript concepts.",
    "questions": [
      {
        "questionText": "Which type of variable is declared using 'let' in JavaScript?",
        "options": [
          "Global",
          "Block-scoped",
          "Local",
          "None of the above"
        ],
        "correctAnswer": 1
      }
    ]
  }
  ```
- **Response**: Returns the created quiz data.

#### 4. **Get All Quizzes**
- **URL**: \`GET http://localhost:3000/api/quizzes\`
- **Response**: Returns all available quizzes.

#### 5. **Get Quiz Details**
- **URL**: \`GET /api/quizzes/:id\`
- **Response**: Returns details of the specified quiz.

#### 6. **Submit Quiz Answers**
- **URL**: \`POST http://localhost:3000/api/quizzes/:id/submit`
- **Body**:
  ```json
  {
    "answers": [1, 2]
  }
  ```
- **Response**: Returns the score and total number of questions.

---

