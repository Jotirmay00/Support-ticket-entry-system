
# Support Ticket Entry System

A Support Ticket Entry System using the MERN (MongoDB, Express.js, React.js, Node.js) stack.


## API Reference

#### Get all Tickets

```http
  GET /api/support-tickets
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Ticket

```http
  GET /api/support-tickets/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Ticket to fetch |






## Run Locally

Clone the project

```bash
  git clone https://github.com/Jotirmay00/Support-ticket-entry-system.git
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`



