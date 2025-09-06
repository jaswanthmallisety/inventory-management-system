# Cloud-Based Inventory Management System

This is a full-stack, microservices-based application designed to manage enterprise-level inventory, demonstrating a deep understanding of distributed computing, modern backend engineering, and dynamic frontend development.

## Technologies Used
- **Backend:** Java, Spring Boot, Spring Cloud (Eureka, API Gateway)
- **Frontend:** React.js
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose
- **Architecture:** Microservices
- **APIs:** RESTful APIs
- **Version Control:** Git

## Project Architecture
The system is composed of several independent services that communicate with each other:
- **Discovery Service (Eureka):** Allows services to register and discover each other dynamically.
- **API Gateway:** A single entry point for all client requests, routing them to the appropriate backend service.
- **Product Service:** Manages all product-related information (CRUD operations).
- **Inventory Service:** Manages the stock levels for each product.
- **Frontend:** A React application providing a user-friendly dashboard for interaction.
- **Database:** A PostgreSQL database for persistent data storage.

All services are containerized using Docker for consistency and ease of deployment.

## How to Run
To run this project, you need to have **Docker** and **Docker Compose** installed.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/jaswanthmallisety/cloud-inventory-system-microservices.git](https://github.com/jaswanthmallisety/cloud-inventory-system-microservices.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd cloud-inventory-system-microservices
    ```

3.  Build and start all the services using Docker Compose:
    ```bash
    docker-compose up --build
    ```

## Accessing the Application
- **Frontend UI:** `http://localhost:3000`
- **Eureka Dashboard:** `http://localhost:8761`
- **API Gateway:** `http://localhost:8080` (e.g., to get all products, use `GET http://localhost:8080/api/products`)
