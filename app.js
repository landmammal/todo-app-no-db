// stop here and ask out loud what express is?
const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');

// set up template engine
app.set('view engine', 'ejs');

// static file management
// set up middleware to be able to map to static files
// runs when assets is in the routes
// app.use('/assets',express.static('./public'));
// but if you take away the specification of the route
app.use(express.static('./public'));
// here with express.static will stand by and wait if the client sends a request for a static file via link or script tag

// fire controllers
todoController(app);

// listen to a port
app.listen(3000);
console.log('you are listening to port 3000');
