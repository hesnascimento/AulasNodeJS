const router = require('express').Router()
const SubscriptionController = require('./SubscriptionController')

router.get('/check', SubscriptionController.checkEmail)
router.post('/subscribe', SubscriptionController.subscribe)

module.exports = router
