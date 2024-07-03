# Basic server in express and nodejs

This is the first stage of the pretigious HNG intership, for this stage the requirment is a simple server that returns some informations about the request.

This basic web server built with Node.js and Express exposes an API endpoint to greet visitors with their location and the current temperature.

## Features

- Retrieves the client's IP address and location.
- Fetches the current temperature based on the client's location.
- Returns a personalized greeting message.

## Endpoint

### [GET] /api/hello

#### Query Parameters

- `visitor_name` (optional): The name of the visitor.

#### Response

```json
{
  "client_ip": "127.0.0.1", // The IP address of the requester
  "location": "Onitsha", // The city of the requester
  "greeting": "Hello, Mark! The temperature is 11 degrees Celsius in Onitsha." // assume vistor_name is Mark
}
```

## Getting Started

### Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

```shell
git clone https://github.com/nathphil9411/hng-internship-stage-one-basic-server.git
```

2. Navigate to the project directory:

```shell
cd hng-internship-stage-one-basic-server
```

3. Install dependencies:

```shell
npm install
```

4. Running the Server
   Create a .env file in the root directory and specify the port (optional):

```makefile
PORT=3000
```

5. Start the server:

```shell
node index.js
```

The server will be running on the specified port (default: 3000). You can access the endpoint at:

```shell
http://localhost:3000/api/hello?visitor_name=Mark
```

## Built With

- Node.js
- Express
- Axios

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

ipapi.co for IP geolocation.
Open Meteo for weather data.
