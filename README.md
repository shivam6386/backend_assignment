A backend-focused full-stack application demonstrating secure authentication, role-based access control, CRUD operations, and scalable API design using Node.js, Express, MongoDB, and a React frontend.

Backend

-User registration & login

-Password hashing with bcrypt

-JWT authentication

-Role-based access (USER / ADMIN)

-CRUD APIs for Tasks

-API versioning (/api/v1)

-Input validation & centralized error handling

-MongoDB schema design (Mongoose)

-Swagger API documentation

Frontend

-React-based UI

-User login

-Protected dashboard

-Task CRUD operations

-API error & success message handling

#Tech Stack

##Backend

-Node.js

-Express.js

-MongoDB + Mongoose

-JWT

-bcrypt

-Swagger (OpenAPI)

#Frontend

-React (Vite)

-Fetch API

 Project Structure
backend/
 ├─ src/
 │  ├─ config/
 │  ├─ models/
 │  ├─ routes/
 │  ├─ middleware/
 │  ├─ utils/
 │  ├─ app.js
 │  └─ server.js
 ├─ swagger.js
 ├─ .env
 └─ package.json

frontend/
 ├─ src/
 └─ package.json



2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend directory:

PORT=4000
MONGO_URI=mongodb://localhost:27017/taskdb



Start the backend server:

npm run dev


Backend will run at:

http://localhost:4000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

 Authentication Flow

User registers → password is hashed

User logs in → receives JWT

JWT is sent in headers:

Authorization: Bearer <token>


Protected routes validate JWT & role

API Documentation (Swagger)

After starting the backend, visit:

http://localhost:4000/docs


This contains interactive API documentation for all endpoints.

🔗 API Endpoints (v1)
Auth
Method	Endpoint	Description
POST	/api/v1/auth/register	Register new user
POST	/api/v1/auth/login	Login user
Tasks (Protected)
Method	Endpoint	Description
GET	/api/v1/tasks	Get user tasks
POST	/api/v1/tasks	Create task
PUT	/api/v1/tasks/:id	Update task
DELETE	/api/v1/tasks/:id	Delete task
Security Practices

Password hashing using bcrypt

JWT authentication with expiration

Role-based route protection

Input validation & sanitization

No sensitive data exposed in responses


Refresh tokens

