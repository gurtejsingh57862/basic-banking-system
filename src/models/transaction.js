const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    sender: {
        type: String
    },
    receiver: {
        type: String
    },
    amount: {
        type: Number
    }
}, {
    timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction