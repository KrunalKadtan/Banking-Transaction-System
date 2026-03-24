const router = require('express').Router()

const authMiddleware = require('./../middleware/auth.middleware')

const accountController = require('./../controllers/account.controller')

/**
* - POST /api/accounts/
* - Create a new Account
* - Protected Route
*/
router.post('/', authMiddleware.authMiddleware, accountController.createAccountController)

module.exports = router
