#Blog Application - Backend

This repository contains the backend code for the **Blog Application** project. The backend manages API requests, data handling, and ensures secure communication between the frontend and the database, enabling features like user authentication, blog creation, and newsletter management.

## Features

- **User Authentication & Authorization**: Secure login and registration for users as either Readers or Authors using JWT.
- **Weekly Newsletter**: Automated email delivery of the latest blogs and updates to subscribed users.
- **Blog Management**: API endpoints for creating, editing, and managing blogs with images.
- **Publication Control**: Dashboard to view and manage the publication status of blogs.
- **Profile Section**: Manage user profile, including viewing and editing personal information.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Framework for building APIs and handling server-side logic.
- **MongoDB**: NoSQL database for storing and managing application data.
- **Mongoose**: ODM for MongoDB, providing schema-based solutions.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **bcrypt**: For encrypting user passwords.
- **Cloudinary**: For managing and storing blog images.
- **dotenv**: For environment variable management.
- **Validator**: For validating data before processing.

## Getting Started

### Prerequisites
- Node.js and npm/yarn installed on your local machine.
- MongoDB instance or cluster for database management.
- Cloudinary account for managing images (optional but recommended).
- 
### Installation

1. **Clone the repository:**

```bash
Copy code
git clone https://github.com/princeessjay/Blog_Application_Backend.git

cd Blog_Application_Backend

2. **Install dependencies:**

```bash
npm install

3. **Create a .env file:**

```bash
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. **Start the server:**

```bash
npm run dev

5.Deployment:

```bash
npm run build

# License
Licensed under the [MIT license]().

Fun Fact
Lines of code: 5096 😆😆😆😆

