const express = require('express')
const Transaction = require('../models/transaction')
const router = new express.Router()

router.post('/transaction', async (req, res) => {
    const transaction = new Transaction(req.body)

    await transaction.save()

    res.send(transaction)
})

router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find({})

    if (!transactions) {
        return res.status(500).send()
    }

    res.send(transactions)
})

router.get('/history', async (req, res) => {
    const transactions = await Transaction.find({})
    res.render('history', {
        data: transactions
    })
})

module.exports = router