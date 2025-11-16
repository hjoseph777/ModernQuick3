# Book Manager Application
- Author: Harry JosepH 
-  Genres: Programming, Web Development
-  DateAdded: "2025-11-15"

A simple Node.js web application for managing a personal book collection using Express, MongoDB, and EJS.




## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
cd book-manager
npm install
```

### 2. Environment Setup
The `.env` file is already configured with your Atlas connection:
```
MONGODB_URI=mongodb+srv://hjoseph777_mongodb_user:password@cluster0.nizoxjv.mongodb.net/lab04
PORT=3000
```

### 🌐 Live Demo
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-View_Application-blue?style=for-the-badge)](http://localhost:3000)

> **Note**: Demo link will be active when the application is running locally on port 3000

### 3. Start the Application
```bash
npm start
```
Or for development with auto-reload:
```bash
npm run dev
```

### 4. Access the Application
- Open browser to: http://localhost:3000
- Add books via: http://localhost:3000/add

## 📁 Project Structure
```
book-manager/
├── models/book.js        # Mongoose Book schema (3 marks)
├── routes/books.js       # Express routes & endpoints (5 marks)
├── views/
│   ├── layout.ejs        # Base template
│   ├── index.ejs         # Book listing page
│   └── add.ejs          # Add book form
├── public/style.css      # Styling
├── app.js               # Main server (MongoDB connection - 2 marks)
├── package.json         # Dependencies
└── .env                 # Database configuration
```

## 🔧 Features Implemented

### Core Requirements:
- **Add Books**: Form with validation for Name, Author, Genres
- **View Books**: Display all books with formatting
- **MongoDB Integration**: Full CRUD operations
- **Error Handling**: Comprehensive validation and error messages

### Database Schema:
```javascript
{
  Name: "Nodejs",
  Author: "Humbercollege", 
  Genres: "Thriller",
  createdAt: Date,
  updatedAt: Date
}
```

### API Endpoints:
- `GET /` - Display all books
- `GET /add` - Show add book form  
- `POST /books` - Create new book
- `GET /api/books` - JSON API for books

## 🧪 Testing Instructions

### Manual Testing:
1. **Connection Test**: Check console for "Successfully connected to MongoDB Atlas!"
2. **Add Book Test**: Submit form with sample data
3. **View Books Test**: Verify books display correctly
4. **Validation Test**: Try submitting empty form

### Sample Data:
```
Name: "The Great Gatsby"
Author: "F. Scott Fitzgerald"  
Genres: "Classic Fiction"
```


## 🛠 Technical Details

### Dependencies:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `ejs` - Templating engine  
- `dotenv` - Environment variables

### Database:
- MongoDB Atlas cluster: `cluster0.nizoxjv.mongodb.net`
- Database: `lab04`
- Collection: `books` (auto-created)

## 📝 Additional Notes

- Responsive design works on mobile devices
- Form validation prevents empty submissions
- Success/error messages provide user feedback
- Books are sorted by creation date (newest first)
- Character limits enforced on all fields

