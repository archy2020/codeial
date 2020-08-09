const express = require('express');
const port = 8000;

const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and script from sub pages into layouts
app.set(' layout extractStyles',true);
app.set(' layout extractScripts',true);
// set view
app.set('view engine','ejs');
app.set('views','./views');




// use express router
app.use('/',require('./routes'));

// app.listen(port, function(err){
//     if(err){
//         console.log(err);

//     }
//     console.log('Yup!!Server is running at the port :' + port);
// })
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
