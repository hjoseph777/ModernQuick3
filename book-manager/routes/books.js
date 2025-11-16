const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Homepage route - displays all books (View operation)
router.get('/', async (req, res) => {
  try {
    // Fetch all books from MongoDB
    const books = await Book.find().sort({ createdAt: -1 });
    res.render('index', { 
      title: 'Book Collection',
      books: books,
      message: req.query.message || null
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).render('index', { 
      title: 'Book Collection',
      books: [],
      error: 'Unable to load books. Please try again.'
    });
  }
});

// Show add book form
router.get('/add', (req, res) => {
  res.render('add', { 
    title: 'Add New Book',
    error: null,
    formData: {}
  });
});

// Handle new book submission (Add operation)  
router.post('/books', async (req, res) => {
  try {
    // Extract form data
    const { Name, Author, Genres } = req.body;
    
    // Basic validation
    if (!Name || !Author || !Genres) {
      return res.render('add', {
        title: 'Add New Book',
        error: 'All fields are required!',
        formData: req.body
      });
    }

    // Create new book document
    const newBook = new Book({
      Name: Name.trim(),
      Author: Author.trim(), 
      Genres: Genres.trim()
    });

    // Save to MongoDB
    await newBook.save();
    console.log(`New book added: ${newBook.Name} by ${newBook.Author}`);
    
    // Redirect with success message
    res.redirect('/?message=Book added successfully!');
    
  } catch (error) {
    console.error('Error adding book:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errorMessage = Object.values(error.errors)[0].message;
      return res.render('add', {
        title: 'Add New Book',
        error: errorMessage,
        formData: req.body
      });
    }
    
    res.render('add', {
      title: 'Add New Book', 
      error: 'Unable to add book. Please try again.',
      formData: req.body
    });
  }
});

// API endpoint to get books as JSON (bonus for testing)
router.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch books' });
  }
});

module.exports = router;