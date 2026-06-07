# Sportify - Your Ultimate Sports Equipment Store 🏏⚽🎾

![Sportify Banner](https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

Welcome to **Sportify**, a fully-featured, modern E-commerce platform built specifically for sports equipment. Whether you are a professional athlete or a weekend warrior, Sportify provides a seamless shopping experience for all your sporting needs.

## 🌟 Key Features

*   **Role-Based Access Control:** Separate dashboards and functionalities for Customers, Admin, and Suppliers.
*   **Dynamic Product Catalog:** Browse products by categories, brands, and featured items.
*   **Cloudinary Integration:** Robust, persistent cloud-based image storage for all product and profile images.
*   **Secure Authentication:** JWT-based authentication with encrypted passwords (bcryptjs).
*   **Shopping Cart & Wishlist:** Intuitive cart management and the ability to save favorite items.
*   **Stripe Payment Integration:** Secure checkout process utilizing Stripe for payments.
*   **Admin Dashboard:** Comprehensive management of Users, Products, Categories, Brands, and Orders.
*   **Supplier Dashboard:** Inventory management and order fulfillment tracking.
*   **Responsive UI:** A beautiful, modern interface built with React, Tailwind CSS, and Framer Motion animations.
*   **PDF Reports:** Generate and download various reports directly from the dashboards.

## 🛠️ Technology Stack

### Frontend (Client-side)
*   **Framework:** React 18 & Vite
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Routing:** React Router DOM v7
*   **State Management/Data Fetching:** React Query (TanStack Query)
*   **Icons:** Lucide React & React Icons
*   **Maps:** Leaflet & React Google Maps

### Backend (Server-side)
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB (Mongoose ORM)
*   **Authentication:** JSON Web Tokens (JWT)
*   **File Uploads:** Multer & Multer-Storage-Cloudinary
*   **Cloud Storage:** Cloudinary
*   **Payments:** Stripe

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/Achintha2002/Sportifyweb.git
cd Sportifyweb
```

### 2. Backend Setup
Navigate to the API folder and install dependencies:
```bash
cd app/api
npm install
```

Create a `.env` file in the `app/api` directory and add the following variables:
```env
PORT=5555
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the web folder, and install dependencies:
```bash
cd app/web
npm install
```

Create a `.env` file in the `app/web` directory:
```env
VITE_SERVER_URL=http://localhost:5555
VITE_API_URL=http://localhost:5555/api
```

Start the frontend development server:
```bash
npm run dev
```

## 🌐 Deployment Information
*   **Backend:** Configured for seamless deployment on [Vercel](https://vercel.com/) via `vercel.json`.
*   **Frontend:** Optimized Vite build for deployment on Vercel, Netlify, or GitHub Pages.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

---
*Built with ❤️ by Achintha Edirisinghe.*
