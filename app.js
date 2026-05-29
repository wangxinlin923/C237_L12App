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
    res.render('index', { dramaList });
});

app.get('/addDrama', (req, res) => {
    res.render('addDrama')
});

app.post('/addDrama', (req, res) => {
    //Retrieve form data
    const newDrama = {
        dramaName: req.body.dramaName,
        ratings: req.body.ratings,
        comments: req.body.comments
    };
    //Save into array
    dramaList.push(newDrama);
    //Redirect back to the homepage 
    res.redirect('/');
});

app.get('/updateDrama/:id', (req, res) => {
    //Retrieve the ID from the URL 
    const id = req.params.id;
    //Retrieve the specific drama data from the dramaList array using the ID
    const drama = dramaList[id];
    //Render the updateDrama page and pass the specific drama data and ID for rendering
    res.render('updateDrama', { drama, id });
});

app.post('/updateDrama/:id', (req, res) => {
    const id = req.params.id;
    //Update the specific drama data in the dramaList array using the ID and the form data from req.body
    dramaList[id] = {
        dramaName: req.body.dramaName,
        ratings: req.body.ratings,
        comments: req.body.comments
    };
    //Redirect back to the homepage after updating the drama data
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    //Retrieve the ID from the URL
    const id = req.params.id;
    // Remove the drama from the array
    dramaList.splice(id, 1);
    //Redirect back to the homepage after deleting the drama data
    res.redirect('/');
});
// ---------------------------------------------------

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});