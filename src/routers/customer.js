const express = require('express')
const Customer = require('../models/customer')
const router = new express.Router()

router.post('/customer', async (req, res) => {
    const customer = new Customer(req.body)

    await customer.save()

    res.send(customer)
})

router.get('/customers', async (req, res) => {
    const customers = await Customer.find({})

    if (!customers) {
        return res.status(500).send()
    }

    res.send(customers)
})

router.get('/view_customer', async (req, res) => {
    const customers = await Customer.find({})

    res.render('view_customer', {
        data: customers
    })
})

router.get('/customer_detail/:id', async (req, res) => {
    const _id = req.params.id
    const customer = await Customer.findById(_id)

    const customers = await Customer.find({})

    const other_customers = customers.filter((element) => {
        return element._id != _id
    })

    res.render('customer_detail', {
        data: customer,
        other_customers
    })
})

router.patch('/customer/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id)

    customer.balance = customer.balance + req.body.amount

    await customer.save()

    res.send(customer)
})

router.get('/')

module.exports = router