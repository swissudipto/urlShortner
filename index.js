const express = require('express');
const { connectToMongoDB } = require('./connect');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
const connectionString = `mongodb+srv://sbose562:<password>@cluster0.1wkvows.mongodb.net/?retryWrites=true&w=majority/short-url` || 'mongodb://127.0.0.1:27017/short-url'
// Body Parser Middleware 
app.use(express.json());
//app.use(express.urlencoded({extended:false}));

// Enabling CORS for API calling from diffrent region
app.use(cors());

console.log('Connection String=' +connectionString);
connectToMongoDB(connectionString).then(() =>
 console.log('MongoDB Connected')
 );

app.use('/api/shortner',require('./routes/api/shortner.endpoint'));

app.use('/',require('./routes/api/redirect.endpoint'));

app.use('/api/getvistihistory',require('./routes/api/getVisitHistory.endpoint'));

app.listen(PORT,() => console.log('Server started'));