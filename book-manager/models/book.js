const mongoose = require('mongoose');

// Book schema definition (3 marks requirement)
const bookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Book name is required'],
    trim: true,
    maxlength: [100, 'Book name cannot exceed 100 characters']
  },
  Author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    maxlength: [50, 'Author name cannot exceed 50 characters']
  },
  Genres: {
    type: String,
    required: [true, 'Genre is required'],
    trim: true,
    maxlength: [30, 'Genre cannot exceed 30 characters']
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

// Create the model
const Book = mongoose.model('Book', bookSchema);

// Sample document structure:
/*
Example Book Document:
{
  Name: "Nodejs",
  Author: "Humbercollege", 
  Genres: "Thriller",
  createdAt: "2024-11-13T10:30:00.000Z",
  updatedAt: "2024-11-13T10:30:00.000Z"
}
*/

// Example Mongoose query for reference
// Book.find({ Genres: 'Thriller' }).then(books => console.log(books));

module.exports = Book;