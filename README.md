# Tasks With Admin Project

This project consists of a backend developed using NodeJS and a frontend built with React. The backend runs on `localhost:5000`, and the frontend runs on `localhost:3000`. The application connects to an online MongoDB cluster for data storage.

## Prerequisites
- **Node.js and npm** (Node Package Manager)

## Getting Started

### Backend Setup (NodeJS)

1. **Install all the packages of the Backend**
   ```bash
   npm install
2. **Create .env file as Database is already montitored in Mongodb atlas serveless cluster so you dont need to install it**
   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://amar3152002:U1b3DfdPxmbEz6rl@cluster.6uvay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

3. **Run the Backend by start cmd**
   ```bash
   npm start

4. **if above cmd does not work --Run the Backend by node app.js**
   ```bash
   node app.js

## The backend should now be running on http://localhost:5000.
