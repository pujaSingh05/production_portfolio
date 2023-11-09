const express  = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');


//dotenv configuration
dotenv.config()

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())

//static files9
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/index.html'))
});

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'));


//port
const PORT = process.env.PORT || 8050

//listen
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
