markdown
# SW Technologies - Complete Full Stack Web Application

A professional, fully responsive company website for SW Technologies with complete backend integration, user authentication, admin panel, and database management.

## 🌐 Live Demo

| Component | URL |
|-----------|-----|
| **Frontend (Website)** | [https://mr-rinku-kumar.github.io/SWTechnologies/](https://mr-rinku-kumar.github.io/SWTechnologies/) |
| **Backend API** | [https://swtechnologies-backend.onrender.com](https://swtechnologies-backend.onrender.com) |

## 📦 GitHub Repositories

| Repository | Link |
|------------|------|
| **Frontend** (This repo) | [https://github.com/Mr-Rinku-Kumar/SWTechnologies](https://github.com/Mr-Rinku-Kumar/SWTechnologies) |
| **Backend** | [https://github.com/Mr-Rinku-Kumar/SWTechnologies-Backend](https://github.com/Mr-Rinku-Kumar/SWTechnologies-Backend) |

---

## 📋 Project Overview

This is a complete full-stack web application for SW Technologies, a web development company.

### Features

#### Frontend
- ✅ Sticky navbar with hamburger menu for mobile
- ✅ Fully responsive design (320px → 1280px+)
- ✅ Modern UI with gradients, shadows, and animations
- ✅ Back to Top button
- ✅ Client-side form validation
- ✅ Google Maps embed
- ✅ Quote request modal with service pre-selection
- ✅ Real-time user authentication state in navbar

#### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ JWT authentication (7-day expiry)
- ✅ Password hashing with bcryptjs
- ✅ Server-side validation
- ✅ Admin-only protected routes
- ✅ Complete CRUD operations

#### Admin Panel
- ✅ Modern dashboard with statistics
- ✅ View all contact messages
- ✅ View all registered users
- ✅ View all newsletter subscribers
- ✅ View all quote requests
- ✅ Delete contact messages
- ✅ Search functionality
- ✅ Mobile responsive

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Flexbox, Grid, animations |
| JavaScript | DOM manipulation, API calls |
| Google Fonts | Inter font family |
| Font Awesome 6 | Icons |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication tokens |
| bcryptjs | Password hashing |
| express-validator | Input validation |
| cors | Cross-origin resource sharing |
| dotenv | Environment variables |

---

## 📁 Project Structure
SWTechnologies/ # Frontend Repository
├── index.html # Homepage
├── about.html # About Us page
├── services.html # Services page
├── contact.html # Contact page
├── login.html # User login
├── register.html # User registration
├── admin.html # Admin dashboard
├── styles.css # Global styles
├── script.js # Frontend JavaScript
└── README.md # Documentation

SWTechnologies-Backend/ # Backend Repository (Separate)
├── server.js # Express server
├── package.json # Dependencies
├── .env # Environment variables
├── database.js # MongoDB connection & schemas
├── seed.js # Admin user seeder
├── middleware/
│ └── auth.js # JWT authentication
└── routes/
├── auth.js # Login/Register routes
├── contact.js # Contact form routes
├── newsletter.js # Newsletter routes
├── quote.js # Quote routes
└── admin.js # Admin protected routes

text

---

## 🗄️ Database Collections

| Collection | Fields |
|------------|--------|
| **Users** | id, name, email, password (hashed), role, createdAt |
| **Contacts** | id, name, email, phone, subject, message, createdAt |
| **Newsletter** | id, email, subscribedAt |
| **Quotes** | id, name, email, phone, serviceRequired, budget, message, createdAt |

---

## 🚀 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile (protected) |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |

### Newsletter
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter/subscribe` | Subscribe to newsletter |

### Quote
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/quote` | Submit quote request |

### Admin (Protected - Admin Only)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/contacts` | Get all contacts |
| DELETE | `/api/admin/contacts/:id` | Delete contact |
| GET | `/api/admin/users` | Get all users |
| GET | `/api/admin/newsletter` | Get all subscribers |
| GET | `/api/admin/quotes` | Get all quotes |

---

## 🔧 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### Step 1: Clone Repositories

```bash
# Clone frontend
git clone https://github.com/Mr-Rinku-Kumar/SWTechnologies.git
cd SWTechnologies

# Clone backend (in separate folder)
cd ..
git clone https://github.com/Mr-Rinku-Kumar/SWTechnologies-Backend.git
cd SWTechnologies-Backend
Step 2: Backend Setup
bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
# OR manually create:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/swtechnologies
# JWT_SECRET=your_super_secret_key_here
# JWT_EXPIRE=7d
# ADMIN_EMAIL=admin@swtechnologies.com
# ADMIN_PASSWORD=Admin@123456

# Seed admin user (first time only)
npm run seed

# Start backend server
npm run dev
Step 3: Frontend Setup
bash
# Go to frontend folder
cd ../SWTechnologies

# Update API_URL in script.js for local development
# Change: const API_URL = 'https://swtechnologies-backend.onrender.com/api';
# To: const API_URL = 'http://localhost:5000/api';

# Serve frontend using Live Server
npx live-server --port=5500
Step 4: Access the Application
Frontend: http://localhost:5500

Backend API: http://localhost:5000

Admin Panel: http://localhost:5500/admin.html

🔐 Default Admin Credentials
Field	Value
Email	admin@swtechnologies.com
Password	Admin@123456
📱 Responsive Breakpoints
Device	Width	Status
Mobile	320px - 480px	✅ Optimized
Tablet	768px - 1024px	✅ Optimized
Desktop	1280px+	✅ Optimized
🚀 Deployment Guide
Frontend Deployment (GitHub Pages)
Push frontend code to this repository

Go to Repository → Settings → Pages

Select branch main and folder / (root)

Click Save

Site will be live at: https://mr-rinku-kumar.github.io/SWTechnologies/

Backend Deployment (Render)
Push backend code to separate repository (SWTechnologies-Backend)

Go to Render.com → New Web Service

Connect your backend GitHub repository

Configure:

Build Command: npm install

Start Command: node server.js

Add environment variables

Click Create Web Service

Update API_URL in frontend script.js to your Render URL

Database Deployment (MongoDB Atlas)
Create free cluster on MongoDB Atlas

Get connection string

Add to backend environment variables

🎨 Design Highlights
Color Scheme: Deep navy (#0a1927) + Indigo accent (#4f46e5)

Typography: Inter (sans-serif) from Google Fonts

Animations: Fade-in, hover lift, slide effects

Shadows: Subtle elevation with depth on hover

Spacing: Consistent padding/margins across all pages

✅ Testing Checklist
User registration works

User login works

JWT token stored in localStorage

Username appears in navbar after login

Logout clears token

Contact form saves to database

Newsletter subscription saves to database

Quote request saves to database

Admin can view all data

Admin can delete contacts

Admin panel shows statistics

All forms have validation

Responsive on all devices

Cross-browser compatible

📄 License
This project is free to use for personal and commercial purposes.

🙋 Support
For questions or support, contact: hello@swtechnologies.com

👨‍💻 Author
SW Technologies - Web Development Company

Website: https://mr-rinku-kumar.github.io/SWTechnologies/

GitHub: @Mr-Rinku-Kumar

🙏 Acknowledgments
Font Awesome for icons

Google Fonts for Inter typeface

MongoDB Atlas for cloud database

Render for backend hosting

GitHub Pages for frontend hosting

📊 Project Status
Component	Status	URL
Frontend	✅ Live	GitHub Pages
Backend	✅ Live	Render
Database	✅ Live	MongoDB Atlas
Built with ❤️ for the web. Full-stack application with modern technologies.