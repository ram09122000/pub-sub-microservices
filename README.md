## Microservice - Pub/Sub Architecture with Node.js, MongoDB & Redis

This project demonstrates a scalable microservices architecture using Node.js, Express, MongoDB, and Redis with a Pub/Sub communication model.

---

## Installation

1. **Clone the repo**
   git clone <your-repo-url>
   cd backend-assignment

2. **Start all services**
   docker-compose up -d --build

### EndPoint
POST http://localhost:5000/receiver
Content-Type: application/json

### Request Body
{
  "user": "Harry",
  "class": "Comics",
  "age": 22,
  "email": "harry@potter.com"
}

### Response
{
  "message": "Data received and published",
  "data": {
    "id": "b74bd9c2-8590-4149-9628-3f738099831a",
    "user": "Harry",
    "class": "Comics",
    "age": 22,
    "email": "harry@potter.com",
    "inserted_at": "2024-03-25T12:00:00.000Z"
  }
}

