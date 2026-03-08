# Cravora
**Cravora** is a **full-stack** food ordering web app designed for restaurants to offer users a seamless online ordering experience. Users can browse the menu, add items to their cart, place orders with multiple payment options, and track their order status in real-time.

This project was built **individually** as a portfolio project to showcase full-stack web development skills.

## Features

**User Features**
- **Authentication**: Secure login/signup with JWT and hashed passwords (bcrypt).
- **Menu Browsing**: Searchable menu.
- **Cart & Orders**: Add items to cart, place orders with Cash on Delivery or Online payment (Stripe test mode).
- **Order History & Tracking**: View past and current orders, track order status: Processing → Out for Delivery → Delivered.
- **Account Management**: View orders and, secure logout.
- **UI/UX Enhancements**: Protected routes, toast notifications, drag-scroll menu, responsive design.
  
**Admin Features**
- **Dashboard**: Add new items with details (name, description, price, category, image).
- **Manage Items**: View, and delete items.
- **Order Management**: Real-time order list and history tracking.

## Tech Stack

**Frontend:**
- React
- CSS
- Axios
- Context API

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT authentication
- bcrypt password hashing

**Other Tools:**
- Stripe (test mode)
- Protected routes, toast notifications, responsive UI

## Folder Structure
Cravora
├── frontend
├── backend
└── admin

## Installation

**Clone the repository:**

```bash
git clone https://github.com/your-username/cravora.git
cd cravora
```
Install dependencies for backend, frontend, and admin:
```bash
cd backend
npm install

cd frontend
npm install

cd admin
npm install
```
Set up environment variables (.env file) for backend:
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_jwt_secret
- STRIPE_SECRET_KEY=your_stripe_test_key

Run backend:
```bash
cd backend
npm run dev
```

Run frontend:
```bash
cd frontend
npm start
```

Run admin panel:
```bash
cd admin
npm start
```

## Future Improvements 
- Deploy to Vercel/Netlify for frontend and Render/Heroku for backend.
- Add real online payment integration using a payment gateway available in Pakistan.
- Improve search and filtering functionality.
- Add user feedback option.

## Author
**Payal** – Full-stack Developer | Built this project individually for portfolio purposes.
