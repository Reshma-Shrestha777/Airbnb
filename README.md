# 🏡 Airbnb Clone — MERN Stack Application

A full-stack **Airbnb-inspired web application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
This project demonstrates a scalable, secure, and modern web architecture that allows users to explore properties, make bookings, and manage listings.

---

## 🚀 Features

### 👤 User Features
- User registration and authentication using **JWT**
- Browse and search property listings
- View detailed listings with images and descriptions
- Book properties with date selection
- View booking history and upcoming stays
- Manage user profile information

---

### 🏠 Host Features
- Create and publish property listings
- Update and delete existing listings
- Manage availability and pricing
- View bookings for owned properties

---

### 🔐 Admin / System Features
- Role-based access control (User / Host / Admin)
- Secure and protected API endpoints
- Centralized error handling
- Request validation and sanitization
- Environment-based configuration
- RESTful API design following best practices

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – Component-based UI
- **React Router** – Client-side routing
- **Axios** – API communication
- **Tailwind CSS** – Utility-first styling
- **Context API** – Global state management

---

### Backend
- **Node.js** – Runtime environment
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – Object Data Modeling (ODM)
- **JWT (JSON Web Tokens)** – Authentication & authorization
- **bcrypt.js** – Password hashing
- **dotenv** – Environment variable management

---

## 🧩 Architecture Overview
- Modular and scalable folder structure
- Separation of concerns (routes, controllers, models, middleware)
- MongoDB reference-based relationships
- Reusable authentication and authorization middleware
- Clean and consistent API response patterns

---

## 🚧 Work in Progress / Upcoming Features
Some advanced features are currently under development:

- 🔍 Advanced search and filtering
- 📅 Availability calendar & booking conflict handling
- ⭐ Reviews and ratings system
- 💳 Payment gateway integration
- 🖼️ Image uploads with cloud storage
- 📊 Admin dashboard & analytics
- 🧪 Unit and integration testing
- 🚀 Production deployment with CI/CD

---

## 🎯 Project Purpose
This project is built to **showcase real-world full-stack development skills**, including authentication, database design, REST APIs, and modern frontend practices—closely resembling a production-ready SaaS application.

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/airbnb-clone.git

# Navigate to project directory
cd airbnb-clone

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
