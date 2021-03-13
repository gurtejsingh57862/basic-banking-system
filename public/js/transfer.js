const form = document.querySelector('form')
const select = document.querySelector('#selectlist')
const amount = document.querySelector('#amount')
const sender_id = document.querySelector('#sender_id')
const sender_name = document.querySelector('#sender_name')
const sender_balance = document.querySelector('#sender_balance')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (select.options[select.selectedIndex].value == "invalid") {
        return alert("Please select an Option")
    }

    if (+amount.value <= 0) {
        return alert("Please enter a valid amount")
    }

    if (+amount.value > +sender_balance.innerHTML) {
        return alert(`${sender_name.innerHTML}: "I don't have that much balance!"`)
    }

    const sender_data = {
        amount: -amount.value
    }
    const sender_options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sender_data)
    }
    fetch('/customer/'+sender_id.innerHTML, sender_options)

    const receiver_data = {
        amount: +amount.value
    }
    const receiver_options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(receiver_data)
    }
    fetch('/customer/'+select.options[select.selectedIndex].value, receiver_options)

    const data = {
        sender: sender_name.innerHTML,
        receiver: select.options[select.selectedIndex].text,
        amount: +amount.value
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/transaction', options)

    window.alert(`Transaction done from ${sender_name.innerHTML} to ${select.options[select.selectedIndex].text}`)
})