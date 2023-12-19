## Messaging App Project Frontend

[![fr](https://img.shields.io/badge/lang-fr-blue)](README.fr.md)

This is the frontend repository for the Full Stack Messaging App Project built for the [Odin Project Curriculum](https://www.theodinproject.com/lessons/nodejs-messaging-app).

The goal of the project was to build a messaging web app that allows users to send and receive real-time messages.

The Socket.IO-client library was used for the real-time communication functionality utilized by the project's client.

- Project's Live Preview url - https://messaging-app-project.onrender.com
- Project's Parent Repository - https://github.com/skynter/Messaging-App
- Project's Backend Repository - https://github.com/skynter/Messaging-App-Backend

## Technologies Used

- ReactJS
- Tailwind CSS
- Socket.io-client

## Key features

- Real-time transmission of messages between users
- Intuitive User Interface
- Fully Responsive User Interface

## Installation

To run the project locally :

- Run the following command to install the project's dependencies

```
npm install
```

- Run the following command to spin up a local development server :

```
npm run dev
```

- Open http://localhost:5173 with your browser to access a local version of the project's client

- The API endpoints listed in the backend folder can be accessed through the hosted API on https://odin-messaging-app-api.onrender.com

- The two main API endpoints are the GET https://odin-messaging-app-api.onrender.com/conversations endpoint and the POST https://odin-messaging-app-api.onrender.com/conversations/add_message
