// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Declare any necessary variables or in-memory data structures here
let dramaList = [
    { dramaName: "When I Fly Towards You", ratings: "5/5", comments: "Love the plot and characters!" },
    { dramaName: "Pursuit of Jade", ratings: "4/5", comments: "Great acting, but the storyline was a bit slow." },
    { dramaName: "First Frost", ratings: "5/5", comments: "Absolutely loved this drama from start to finish!" }
];


// TASK: Define appropriate routes below
// ---------------------------------------------------

//Define a route to render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// ---------------------------------------------------

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});