const express = require('express');
const { connectToMongoDB } = require('./connect');
const app = express();

// Body Parser Middleware 
app.use(express.json());
//app.use(express.urlencoded({extended:false}));

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
 console.log('MongoDB Connected')
 );

app.use('/api/shortner',require('./routes/api/shortner.endpoint'));

app.use('/',require('./routes/api/redirect.endpoint'));

app.use('/api/getvistihistory',require('./routes/api/getVisitHistory.endpoint'));

app.listen(5000,() => console.log('Server started'));