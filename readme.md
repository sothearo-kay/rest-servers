# REST API with TypeScript and Express

This project demonstrates how to build a REST API using **Express** and **TypeScript**. It covers essential REST concepts like CRUD operations, a database layer, authentication with **JWT**, and validation with **Zod**. You’ll also learn how to use **Docker** for containerization.

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

### HTTP Methods

| HTTP Method | Purpose                    | Use Case                                       |
| ----------- | -------------------------- | ---------------------------------------------- |
| **GET**     | Fetch resources            | Retrieve a list or specific resource           |
| **POST**    | Create resources           | Create a new resource                          |
| **PUT**     | Update resources           | Replace an existing resource entirely          |
| **DELETE**  | Delete resources           | Remove a resource by identifier                |
| **PATCH**   | Update resources partially | Modify specific fields of an existing resource |

### Technologies Used

1. **Express:** A minimal framework for building APIs.
2. **Database Layer:** Integration with **Prisma ORM** for database operations.
3. **Authentication:** Utilizes **JWT** (JSON Web Tokens) for user authentication.
4. **Validation:** Uses **Zod** for validating incoming requests.

<br>

## Features

- TypeScript for type safety across the project.
- CRUD operations with **Express**.
- Authentication with **JWT**.
- Data validation with **Zod**.
- Containerized deployment using **Docker**.

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
npm run dev
```

### 5. Folder Structure

```graphql
rest-servers/
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
