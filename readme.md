 # OVERVIEW
This project provides API endpoints for managing users, income, and expenses. The API runs on a local server listening at port 3000.

 # Simple REST API with Express & Firebase

## Installation
1. Clone the repository
2. Run `npm install`
3. Set up Firebase and update `config/firebase.js`
4. Create a `.env` file and add `PORT=3000`
5. Start the server with `node index.js`

# Users API
_Insert User 
 Invoke-WebRequest -Uri "http://localhost:3000/users" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"name": "Nidhi", "email": "Nidhi@gmail.com"}'
 
 _Update User 
 Invoke-WebRequest -Uri "http://localhost:3000/users/<user_id>" -Method PUT -Headers @{ "Content-Type" = "application/json" } -Body '{"name": "Jane Doe", "email": "jane.doe@example.com"}'
 
 _Delete User
 Invoke-WebRequest -Uri "http://localhost:3000/users/<user_id>" -Method DELETE
 
 #Income API
 _Insert Income 
 Invoke-WebRequest -Uri "http://localhost:3000/income" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"userid": "aHhgXgu4Pf60S5U0G0OI", "wages": "8000"}'
 
 _Update income
 Invoke-WebRequest -Uri "http://localhost:3000/income/6n8SsEMz2KxQB5uGgT7s" -Method PUT -Headers @{ "Content-Type" = "application/json" } -Body '{"userid": "aHhgXgu4Pf60S5U0G0OI", "wages": "9000"}'
 
 _Delete Income 
 Invoke-WebRequest -Uri "http://localhost:3000/income/6n8SsEMz2KxQB5uGgT7s" -Method DELETE
 
 #Expenses API
 _Insert Expenses
 Invoke-WebRequest -Uri "http://localhost:3000/expenses" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"userid": "aHhgXgu4Pf60S5U0G0OI", "expenseamt": "80"}'
 
 _Update Expenses
 Invoke-WebRequest -Uri "http://localhost:3000/expenses/kgraaLXyKk7M86F0WdIW" -Method PUT -Headers @{ "Content-Type" = "application/json" } -Body '{"userid": "aHhgXgu4Pf60S5U0G0OI", "expenseamt": "100"}'
 
 _Delete Expenses 
 Invoke-WebRequest -Uri "http://localhost:3000/expenses/aawxdCSjlhNsHg56lN3Y" -Method DELETE

## API Endpoints
- `GET /users` - Retrieve all users
- `POST /users` - Add a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

Similarly, `/expenses` and `/income` endpoints are available.

## Dependencies
- Node.js
- Express
- Firebase Admin SDK
- dotenv
- cors

## Server Information
 The API is running on a local server listening at http://localhost:3000/.




