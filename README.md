# LinkMetric 🔗

A full-stack URL shortening and link analytics platform that allows users to create short links, manage them, track performance, and analyze visitor behavior through a modern dashboard.

Live Demo: https://link-metric.vercel.app

---

# 🚀 Overview

LinkMetric is a production-style URL management system built to simplify link sharing while providing analytics insights.

Users can:

* Create shortened URLs
* Generate custom aliases
* Track clicks
* Monitor link performance
* Manage created links
* View analytics from a dashboard

The project focuses on building a complete full-stack workflow with authentication, REST APIs, database management, and deployment.

---

# ✨ Features

## 🔗 URL Shortening

* Convert long URLs into compact shareable links
* Generate unique short identifiers
* Redirect users from short links to original destinations

Example:

```
Original:
https://example.com/very-long-page-name

Short:
https://linkmetric.onrender.com/aB23x
```

---

## 📊 Link Analytics

Track important link performance metrics:

* Total clicks
* Click history
* User interaction data
* Link activity tracking

Each redirect request is logged and connected with the corresponding link.

---

## ✏️ Custom Link Management

Users can:

* View all created links
* Edit link aliases
* Delete links
* Copy shortened URLs instantly

---

## 🔐 Authentication System

Implemented secure authentication using:

* JWT based authentication
* HttpOnly cookies
* Protected routes
* User based resource ownership

Only authenticated users can:

* Create links
* Modify links
* Access dashboard data

---

## 📱 Dashboard

A clean dashboard experience with:

* All created links
* Click statistics
* Search functionality
* Link management actions
* Responsive UI

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* React Router
* Context API

## Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* REST APIs

## Database

* MySQL

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* Railway

---

# 🧩 System Architecture

```
User
 |
 |
React Frontend
 |
 |
REST API
 |
 |
Spring Boot Backend
 |
 |
MySQL Database
```

---

# 🔄 Application Workflow

## Creating a Short Link

1. User enters a URL
2. Frontend validates input
3. Request sent to Spring Boot API
4. Backend generates unique hash
5. Link stored in database
6. Short URL returned to user

---

## Redirect Flow

Example:

```
GET /abc123
```

Backend:

1. Receives short code
2. Searches database
3. Creates click log
4. Updates click count
5. Redirects user to original URL

---

# 🔐 Authentication Flow

```
User Login

↓

Credentials verified

↓

JWT generated

↓

Stored in HttpOnly Cookie

↓

Protected API requests validated

↓

Access granted
```

---

# 🗄️ Database Design

## User Table

Stores:

* User information
* Authentication details

---

## Link Table

Stores:

* Original URL
* Short URL hash
* Creation time
* Owner information
* Click count

---

## Log Table

Stores:

* Link activity
* Redirect events
* Analytics information

---

# 📡 API Endpoints

## Authentication

### Register User

```
POST /auth/register
```

### Login

```
POST /auth/login
```

### Check Authentication

```
GET /auth/checkAuth
```

---

## Link APIs

### Create Short Link

```
POST /link/shorten
```

---

### Get User Links

```
GET /link/user
```

---

### Update Link Alias

```
PUT /link/{id}
```

---

### Delete Link

```
DELETE /link/{id}
```

---

### Redirect

```
GET /{hash}
```

---

# 🌎 Environment Variables

Backend:

```
DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=

FRONTENDURL=
BACKENDURL=
```

Frontend:

```
VITE_BACKEND_URL=
```

---

# 📂 Project Structure

Backend:

```
src/main/java

├── controller
├── service
├── repository
├── model
├── dto
├── security
└── util
```

Frontend:

```
src

├── components
├── pages
├── context
├── services
└── assets
```

---

# 🛡️ Security Considerations

Implemented:

* JWT authentication
* Cookie based token storage
* Protected APIs
* User ownership validation

Future improvements:

* Rate limiting
* Redis caching
* Advanced threat protection

---

# 📈 Future Improvements

Possible upgrades:

* QR code generation
* Link expiration
* Custom domains
* Real-time analytics
* Redis caching
* Kafka based event processing
* Email notifications
* Team collaboration
* API keys for developers

---

# 💡 Engineering Decisions

## Why Spring Boot?

Spring Boot provides:

* Strong backend structure
* Security ecosystem
* Layered architecture
* Production-ready REST API development

---

## Why React?

React provides:

* Component based UI
* Efficient state management
* Fast development workflow

---

# 🎯 Learning Outcomes

Through this project I implemented:

* Full-stack application architecture
* REST API development
* Authentication systems
* Database relationships
* Deployment workflow
* Frontend-backend integration

---

# 👨‍💻 Author

Ansh Mittal

GitHub:
https://github.com/anshmittal2807

---

# ⭐ Project Status

Currently deployed and functional.

Continuously improving with new features and optimizations.
