# 📦 Microservice System - Pub/Sub Architecture with Node.js, MongoDB & Redis

This project demonstrates a scalable microservices architecture using Node.js, Express, MongoDB, and Redis with a Pub/Sub communication model.

---

## ✅ Problem Statement

Build two services:

1. **Receiver Service**  
   - Exposes a secure endpoint `POST /receiver`
   - Validates and stores incoming user data
   - Publishes the data to Redis Pub/Sub

2. **Listener Service**  
   - Subscribes to the Redis channel
   - Consumes and processes the data
   - Stores it in a second MongoDB collection with an additional `modified_at` field

---

## 🔧 Internal Workflow
graph TD;
    A[Client POSTs Data] --> B[Receiver Service];
    B --> C[Validate & Save to MongoDB];
    C --> D[Publish to Redis (user_created)];
    D --> E[Listener Service Subscribes];
    E --> F[Add modified_at];
    F --> G[Save to MongoDB - Processed Collection];

## 🧱 Tech Stack

- Node.js + Express.js
- MongoDB (NoSQL DB)
- Redis (Pub/Sub messaging)
- Docker + Docker Compose
- UUID (for unique identifiers)
- Joi (for input validation)

---

## 🔧 Installation

1. **Clone the repo**
   git clone <your-repo-url>
   cd backend-assignment

2. **Start all services**
   docker-compose up -d --build

## EndPoint
POST http://localhost:5000/receiver
Content-Type: application/json

## Request Body
{
  "user": "Harry",
  "class": "Comics",
  "age": 22,
  "email": "harry@potter.com"
}

## Response
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

