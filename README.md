# NodeJS-Assignment12

A beginner-friendly Node.js Express assignment created to understand user registration, login, password hashing using bcrypt, JWT authentication, authentication middleware, protected routes, and MongoDB Atlas connection using Mongoose.

## Tasks

1. MongoDB Atlas Connection
2. Create User Model
3. User Registration
4. Password Hashing using bcrypt
5. User Login
6. Generate JWT Token
7. JWT Authentication Middleware
8. Protected `/profile` Route
9. Handle Unauthorized and Invalid Token Requests

## Project Structure

    ├── Screenshots/
    ├── config/
    │   └── db.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   └── userModel.js
    ├── routes/
    │   └── authRoutes.js
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── server.js

## Concepts Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv
- Express Routing
- Authentication Middleware
- Password Hashing
- Protected Routes
- `express.json()`
- `req.body`
- `req.headers`
- `res.status()`
- `res.json()`
- Async/Await
- Error Handling

## Tasks Performed

### Task 1: MongoDB Atlas Connection

Connected the Express application to MongoDB Atlas using Mongoose.

Successful connection message:

    MongoDB connected successfully

### Task 2: Create User Model

Created `userModel.js` inside the `models` folder.

The model contains the following fields:

    name
    email
    password

The email field is unique and the password is stored in hashed form.

### Task 3: User Registration

Created the registration route:

    POST /register

The route accepts user details and checks whether the email already exists.

Example request:

    {
        "name": "Sanika",
        "email": "sanika@example.com",
        "password": "Sanika123"
    }

Successful response:

    {
        "message": "User registered successfully"
    }

### Task 4: Password Hashing

Used `bcrypt` to hash the user's password before storing it in MongoDB.

The password is never stored as plain text.

Example stored password:

    $2b$10$...

### Task 5: User Login

Created the login route:

    POST /login

Example request:

    {
        "email": "sanika@example.com",
        "password": "Sanika123"
    }

The entered password is compared with the stored hashed password using bcrypt.

Successful response:

    {
        "message": "Login successful",
        "token": "generated_jwt_token"
    }

### Task 6: Generate JWT Token

After successful login, a JWT token is generated using `jsonwebtoken`.

The token contains the user's ID and email.

The token expires after:

    1 hour

### Task 7: JWT Authentication Middleware

Created `authMiddleware.js` inside the `middleware` folder.

The middleware reads the token from the Authorization header:

    Authorization: Bearer <token>

It verifies the token using the JWT secret.

Requests without a token are rejected with:

    401 Unauthorized

Invalid or expired tokens are rejected with:

    401 Unauthorized

### Task 8: Protected `/profile` Route

Created the protected route:

    GET /profile

The route requires a valid JWT token.

Successful response:

    {
        "message": "Welcome to your private profile",
        "user": {
            "id": "user_id",
            "email": "sanika@example.com"
        }
    }

### Task 9: Handle Authentication Errors

The `/profile` route was tested with different authentication conditions.

#### Without Token

    GET /profile

Response:

    401 Unauthorized

#### Invalid Token

    Authorization: Bearer invalidtoken123

Response:

    401 Unauthorized

#### Valid Token

A valid JWT token returns:

    200 OK

## MongoDB Atlas

The registered user is stored in the MongoDB Atlas database.

Example user document:

    name: Sanika
    email: sanika@example.com
    password: hashed_password

The password is stored in hashed form using bcrypt.

## Environment Variables

The project uses environment variables for MongoDB Atlas and JWT configuration.

`.env.example`:

    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_secret_key
    PORT=1999

The actual `.env` file is not uploaded to GitHub because it contains sensitive information.

## How to Run

Install the required packages:

    npm install

Start the server:

    node server.js

The server runs on:

    http://localhost:1999

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and generate JWT token |
| GET | `/profile` | Access protected user profile |

## Expected Output

### MongoDB Connection

    MongoDB connected successfully
    Server is running on http://localhost:1999...

### Registration

    {
        "message": "User registered successfully"
    }

### Login

    {
        "message": "Login successful",
        "token": "generated_jwt_token"
    }

### Profile Without Token

    {
        "message": "Unauthorized"
    }

### Profile With Invalid Token

    {
        "message": "Invalid or expired token"
    }

### Profile With Valid Token

    {
        "message": "Welcome to your private profile",
        "user": {
            "id": "user_id",
            "email": "sanika@example.com"
        }
    }

## Screenshots

The `Screenshots` folder contains screenshots showing:

- Server and MongoDB connection
- Successful user registration
- User data stored in MongoDB Atlas
- JWT token generated after login
- Profile request without token
- Profile request with invalid token
- Profile request with valid token

## Author

**Sanika Kangane 👩🏻‍💻**
