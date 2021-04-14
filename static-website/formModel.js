const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const FormSchema = new Schema({
    name: {
        type:String
    },
    info:{
        type:String

    }

})