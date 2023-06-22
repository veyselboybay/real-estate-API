const express = require('express')
const env = require('dotenv')
const cors = require('cors')

env.config();

// Create an express app instance
const app = express();

//
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))
// Routes
app.use('/api/v1', (req,res) => {
    
})

// Listen app 
app.listen(3000, () => {
    console.log('server running on port:3000')
})