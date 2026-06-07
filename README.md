# Sportify E-Commerce Platform

Sportify is a full-stack, modern e-commerce platform designed specifically for sporting goods and athletic wear. It features a robust frontend built with React and Vite, paired with a powerful Node.js/Express backend running on a MongoDB database.

## 🚀 Features

### For Customers
* **Product Catalog & Search**: Browse through categories and brands with advanced filtering.
* **Shopping Cart & Checkout**: Add items to the cart and securely check out with Stripe integration.
* **Order Tracking**: View past orders and track their shipping status.
* **User Profiles**: Manage personal details and addresses.

### For Staff / Admin
* **Dashboard Analytics**: Comprehensive overview of sales, inventory, and users.
* **Inventory Management**: Track and manage stock, low stock alerts.
* **Order Fulfillment**: Update order statuses and manage shipments.
* **User Management**: Manage customers, staff, and suppliers.
* **Support System**: Handle customer queries via a ticketing system.

### For Suppliers
* **Supplier Dashboard**: Dedicated space for suppliers to manage their provided products.
* **Inventory Tracking**: Summaries and reports for supplied stock.
* **Orders & Payments**: View supplier orders and payment history.

## 🛠️ Technology Stack

### Frontend (Web)
* React 18
* Vite
* Tailwind CSS
* React Router DOM v7
* React Query (Data Fetching)
* Axios
* Chart.js & Recharts (Analytics)
* Framer Motion (Animations)
* React Hook Form

### Backend (API)
* Node.js
* Express
* MongoDB & Mongoose
* JWT (Authentication)
* Stripe (Payments)
* Nodemailer (Emails)
* Multer (File Uploads)
* HTML-PDF-Node & html2canvas (PDF Reports)

## 📦 Getting Started

### Prerequisites
* Node.js (v18+)
* MongoDB 

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install Backend Dependencies**
   ```bash
   cd app/api
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd app/web
   npm install
   ```

4. **Environment Variables**
   Create a `.env` file in both `app/api` and `app/web` with the necessary configuration details (e.g., MongoDB URI, Stripe keys, ports).

### Running the Application

**Run the Backend API**
```bash
cd app/api
npm run dev
```

**Run the Frontend App**
```bash
cd app/web
npm run dev
```

The application will be available at the ports specified in your `.env` files (e.g., `http://localhost:3002` for frontend and `http://localhost:5555` for backend).

## 📄 License
This project is licensed under the ISC License.
