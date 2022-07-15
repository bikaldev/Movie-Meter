const express = require('express');

const dataRoutes = require('./routes/data-routes');
const authRoutes = require('./routes/auth-routes');
const errorRoutes = require('./routes/404-route');
const errorHandlingFunction = require('./routes/error-route');

const app = express();
const port = 3000;


app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin','*');
     res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE,OPTION');
     res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
     next();
 });

// url request should have following parameters: sortBy,sortOrder,searchBy,searchOrder,GenreList,GenreLogic 
app.use(dataRoutes);
app.use(authRoutes);
app.use(errorRoutes);
// app.use(errorHandlingFunction);

app.listen(port);