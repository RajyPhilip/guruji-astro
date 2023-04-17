
# Task App Backend

This repository contains the backend API for a task management application. The APIs have been tested using Postman.

## Installation

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the server by running `npm start`.

## Usage
The following APIs are available:

#### GET /tasks
Fetches all tasks from the database.

#### POST /tasks
Adds a new task to the database. The request body should be in JSON format and should contain the following fields:
{
  "title": "Task title",
  "description": "Task description",
}

#### GET /tasks/:id
Fetches a specific task by ID.

#### PATCH /tasks/:id
Updates a specific task by ID. The request body should be in JSON format and should contain the fields to be updated:{
  "status": "completed"
}
#### DELETE /tasks/:id
Deletes a specific task by ID.


## Contributing

Pull requests are welcome.

Please make sure to update tests as appropriate.

## Author

[@Rajy Philip](https://github.com/RajyPhilip).



