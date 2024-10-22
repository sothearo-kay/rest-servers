# REST API with TypeScript and Express

This project demonstrates how to build a REST API using **Express** and **TypeScript**. It covers essential REST concepts like CRUD operations, a database layer, authentication with **JWT**, and validation with **Zod**. You’ll also learn how to use **Docker** for containerization and **NestJS** for larger, more structured backend applications.

<br>

## Table of Contents

- [x] Getting Started
- [x] Architecture Overview
- [x] Features
- [x] Project Setup
- [ ] API Documentation
- [ ] Authentication (JWT)
- [ ] Validation (Zod)
- [ ] Containerization (Docker)
- [ ] Future Improvements

<br>

## Getting Started

This project helps you understand and build a **RESTful API** using TypeScript. Follow the instructions below to get the server running locally.

<br>

## Architecture Overview

The API follows the **REST architecture** to facilitate communication between the client and the backend server.

- **HTTP Methods:**

  - **GET** - Fetch resources
  - **POST** - Create resources
  - **PUT** - Update resources
  - **DELETE** - Delete resources

- **Technologies Used:**
  - **Express:** Minimal framework for building APIs.
  - **Database Layer:** Integration with **Prisma ORM**.
  - **Authentication:** **JWT** (JSON Web Tokens) for user authentication.
  - **Validation:** **Zod** for request validation.

<br>

## Features

- TypeScript for type safety across the project.
- CRUD operations with **Express**.
- Authentication with **JWT**.
- Data validation with **Zod**.
  Containerized deployment using Docker.

<br>

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sothearo-kay/rest-servers.git
cd rest-servers
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Prisma

**[Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)** is a next-generation Node.js and TypeScript ORM that unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.

#### Run Migrations

After defining your models in schema.prisma, you need to create the database and tables. Run the following command in your terminal:

```bash
prisma migrate dev --name init
```

#### Generate the Prisma Client

Once the migrations have been successfully applied, you can generate the Prisma Client, which allows you to interact with your database from your application. Use the following command:

```bash
prisma generate
```

### 4. Run the Server

```bash
npm run start
```

### 5. Folder Structure

```graphql
rest-api-ts/
├── prisma/
│   ├── schema.prisma       # Prisma schema file
│   └── dev.db              # SQLite database file (created automatically)
├── src/
│   ├── controllers/        # Controllers for handling requests
│   ├── routes/             # Express routes
│   ├── services/           # Business logic and database interactions
│   ├── app.ts              # Main application file for setting up Express
│   └── index.ts            # Entry point for starting the server
├── .gitignore
├── nodemon.json
├── package.json
└── tsconfig.json
```
