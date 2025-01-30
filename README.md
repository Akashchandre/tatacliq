#  Tata CLiQ WebApp Clone

A **React + Redux Toolkit** based eCommerce web application inspired by **Tata CLiQ**, with authentication, product browsing, cart management, wishlist functionality, and dynamic UI.

##  Tech Stack

- **Frontend**: React.js, Redux Toolkit, React Router, Tailwind CSS
- **State Management**: Redux Toolkit 
- **Authentication**: Firebase Auth (Email & Password)
- **Backend (Fake API)**: [FakeStoreAPI](https://fakestoreapi.com/)
- **UI Components**: Tailwind CSS

---

##  Features

**User Authentication**: Signup/Login via Firebase  
**Secure Authentication Flow**: Redirects to login if unauthenticated  
**Browse Products**: No login required for viewing products  
**Category Filtering**: View products by category  
**Search Functionality**: Find products via search bar  
**Cart Management**: Add Quantity, Remove Quantity, update cart items  
**Wishlist**: Save favorite products  
**Dynamic Banner**: Auto-sliding carousel 
**Responsive UI**: Fully optimized for desktop & mobile  
**State Persistence**: Wishlist & Cart saved in LocalStorage  
**Error Handling**: Toast for login/signup errors  

---

##  Installation & Setup

## 1 Clone the Repository
```bash
git clone https://github.com/Akashchandre/tatacliq.git
cd tatacliq
2 Install Dependencies
    npm install

3 Configure Firebase
Go to Firebase Console
Create a project and enable Email & Password Authentication
Copy your Firebase credentials and add them to src/firebase.js

## Usage Guide
# Home Page
Displays all products in a sliding carousel.
Users can filter products by category.
Search bar helps find products.
# Authentication
Users can Signup/Login via Firebase.
Unauthenticated users are redirected to login when trying to use cart/wishlist.
# Cart & Wishlist
Products can be added/removed from the cart.
Wishlist persists using LocalStorage.
# Product Details
Clicking a product shows detailed view.
Users can add to cart or add to wishlist.

