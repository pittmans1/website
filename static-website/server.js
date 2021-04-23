// const express = require('express')
// const app = express()
// require('dotenv').config
// const morgan = require('morgan')
// const mongoose = require('mongoose')
// const expressjwt= require('express-jwt')

// process.env.SECRET

// app.use(express.json)
// app.use(morgan('dev'))

// mongoose.connect(
//     'mongodb://localhost:27017/spittman',
//     {
//         useCreateIndex:true,
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//         useFindAndModify:false
//     },
//     () => console.log('databse has been succesfully connected')
// )
// app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

// app.listen(4600, ()=>[
//     console.log('server is running on local port 4600')
// ])