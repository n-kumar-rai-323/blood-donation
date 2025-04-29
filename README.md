# Blood Donation Platform - MERN Stack

## Overview

This project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack to facilitate blood donation. It aims to connect blood donors with individuals or organizations in need, streamlining the donation process and promoting timely access to blood resources.

## Key Features

* **User Authentication:** Secure registration and login for both donors and recipients/organizations.
* **Donor Profiles:** Donors can create and manage their profiles, including blood type, location, contact information, and donation history.
* **Recipient/Organization Profiles:** Hospitals, blood banks, and individuals in need can register and post blood requests.
* **Blood Request Management:** Recipients can create detailed blood requests specifying blood type, quantity, urgency, and location.
* **Search and Filtering:** Users can search for available donors based on blood type and location. Recipients can easily view potential matches for their requests.
* **Matching System:** An intelligent system to automatically match blood requests with eligible donors based on blood type and proximity.
* **Communication Tools:** In-app messaging or contact information sharing to facilitate communication between donors and recipients.
* **Admin Dashboard:** A dedicated dashboard for administrators to manage users, blood requests, and system settings.
* **Notifications:** Real-time notifications for donors about potential donation opportunities and for recipients about matched donors.
* **Donation History:** Track and manage individual donation history for donors.
* **Educational Resources:** Information about blood donation eligibility, process, and benefits.

## Technologies Used

* **Frontend:**
    * React.js: A JavaScript library for building user interfaces.
    * Redux/Context API: For state management.
    * React Router: For client-side routing.
    * Axios: For making HTTP requests to the backend.
    * Styled-components/CSS Modules: For styling components.
* **Backend:**
    * Node.js: A JavaScript runtime environment.
    * Express.js: A minimalist web application framework for Node.js.
    * MongoDB: A NoSQL database for storing application data.
    * Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
    * jsonwebtoken (JWT): For user authentication and authorization.
    * bcrypt: For password hashing.
    * Nodemailer: For sending email notifications. (Optional)
* **Other:**
    * Git: For version control.
    * npm/yarn: For package management.

## Project Structure