const fs = require('fs')

function subscribe(req, res) {
    const {
        name,
        email
    } = req.body

    if (!name || !email) {
        res.status(400).json({
            error: 'Name and/or Email not sent'
        })
    }

    fs.appendFile('./subscriptions.txt', `${name} - ${email}\n`, function(err) {
        if (err) {
            res.status(500).send(err)
        }

        res.status(201).send('Ok! Thank You')
    })
}

function checkEmail(req, res) {
    const {
        email
    } = req.query

    return res.send(`Email ${email} Not found`)
}

module.exports = {
    subscribe,
    checkEmail
}
