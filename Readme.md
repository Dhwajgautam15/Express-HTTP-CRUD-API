# Todo CRUD API

## Description

This is a simple HTTP API for managing todo items stored in a PostgreSQL database. It uses Express.js, Yup for validation, and ORM for sequilization.

## Endpoints

1. **Fetch Todo List** (GET `/todos`)
   - Returns a list of todos.
2. **Fetch Todo Detail** (GET `/todos/:id`)

   - Returns details of a todo of the specific ID.

3. **Create Todo** (POST `/todos`)

   - Creates a new todo and stores it in the table.

4. **Update Todo** (PUT `/todos/:id`)

   - Updates a specific todo and and stores it in the table

5. **Delete Todo** (DELETE `/todos/:id`)
   - Deletes a todo of the given id.

## Validation

Request data is validated using Yup, ensuring data integrity.

## Database

Todos are stored in a PostgreSQL database via ORM Sequelize.

## Getting Started

1. Clone the repository to your local machine.

2. Configure your database connection by creating a .env file. You can follow the envExample file. Ensure that the `development` environment in the .env file matches your PostgreSQL database settings:

   ```ruby
   DB_HOST = "yourhostname"
   DB_USER = "yourUserName"
   DB_PASSWORD = "yourDBPassword"
   DB_NAME= "yourDBName"
   ```

````
3. Install dependencies

```ruby
   npm install
````

4. Start the app

   ```ruby
      node server.js
   ```