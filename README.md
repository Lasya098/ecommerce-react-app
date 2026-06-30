# 🛍️ ShopEase - E-Commerce Frontend

A modern and responsive e-commerce frontend built using **React**, **Vite**, and **Tailwind CSS**. The application allows users to browse products, search and filter items, add products to the cart, manage quantities, and view the total amount. Cart data is persisted using LocalStorage to provide a seamless shopping experience.

---

## Features

- Responsive Home Page
- Products Page
- Live Product Search
- Category Filtering
- Product Sorting (Price & Name)
- Add to Cart
- Increase Quantity
- Decrease Quantity
- Remove from Cart
- Order Summary & Total Price
- Cart Persistence using LocalStorage
- React Context API for Global State Management
- React Router Navigation
- Fully Responsive UI
- API Integration using Axios

---

##  Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Context API
- LocalStorage
- Fake Store API

---

## Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchBar.jsx
│   └── FilterBar.jsx
│
├── context/
│   └── CartContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   └── Cart.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-react-app.git
```

### 2. Navigate to the Project

```bash
cd ecommerce-react-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Required Packages

```bash
npm install
npm install axios
npm install react-router-dom
npm install react-icons
```

---

## API Used

Fake Store API

```
https://fakestoreapi.com/products
```

---

## Approach

The application is built using a component-based architecture to improve code reusability and maintainability.

- **React Router** is used for page navigation between Home, Products, and Cart.
- **Axios** is used to fetch product data from the Fake Store API.
- **React Context API** manages the shopping cart globally, allowing any component to access and update cart data without prop drilling.
- **LocalStorage** stores the cart data so that products remain in the cart even after refreshing the browser.
- Search, filtering, and sorting are implemented on the client side using React state and array methods.
- Tailwind CSS is used to build a clean, responsive, and modern user interface.

---

## Assumptions

- Product data is fetched from the Fake Store API.
- User authentication and backend services are not implemented.
- Checkout is represented as a frontend UI only and does not process real payments.
- Shipping charges are considered free for demonstration purposes.
- Internet connectivity is required to fetch product data from the API.

---

## Future Enhancements

- User Authentication (Login & Signup)
- Wishlist Functionality
- Product Details Page
- Checkout Form
- Payment Gateway Integration
- Order History
- Dark Mode
- Product Pagination
- Toast Notifications
- Product Reviews and Ratings
- Admin Dashboard




---

## Author

**Lasya**

GitHub: https://github.com/your-username

---

## 📄 License

This project is created for learning purposes and portfolio demonstration.