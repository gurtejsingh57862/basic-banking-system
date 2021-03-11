const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
        
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    balance: {
        type: Number,
        degfault: 0
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer