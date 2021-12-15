## Getting started

### 1. Download example and install dependencies

Download this example:


Install npm dependencies:
```
npm install
```

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Department` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.js`](./prisma/seed.js) by running the following command:

```
npx prisma db seed 
```


### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Using the REST API

You can also access the REST API of the API server directly. It is running on the same host machine and port and can be accessed via the `/api` route (in this case that is `localhost:3000/api/`, so you can e.g. reach the API with [`localhost:3000/api/users`](http://localhost:3000/api/feed)).

### `GET`

- `/api/users/:id`: Fetch a single user by its `id`
- `/api/users`: Fetch all users
- `/api/users?searchString={searchString}`: Filter users by `department` or `location`

### `POST`

- `/api/users`: Create a new user
  - Body:
    - `name: String` (required): User's name
    - `email: String` (required): User's email
    - `title: String` (required): User's title
    - `location: String` (required): User's location
    - `age: Integer` (optional): User's age
    - `picture: String` (optional): User's picture
- `/api/department`: Create a new user
  - Body:
    - `name: String`: Department Name
    - `users: User[]`: Array of users in the department

### `DELETE`
  
- `/api/user/:id`: Delete a user by its `id`
