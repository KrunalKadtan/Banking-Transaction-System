const router = require('express').Router()

const authMiddleware = require('./../middleware/auth.middleware')

const accountController = require('./../controllers/account.controller')

/**
* - POST /api/accounts/
* - Create a new Account
* - Protected Route
*/
router.post('/', authMiddleware.authMiddleware, accountController.createAccountController)

/**
 * - GET /api/accounts/
 * - Get all accounts of the logged-in user
 * - Protected Route
*/
router.get('/', authMiddleware.authMiddleware, accountController.getUserAccountsController)

/**
 * - GET /api/accounts/balance/:accountId
  */
router.get('/balance/:accountId', authMiddleware.authMiddleware, accountController.getAccountBalanceController)

module.exports = router
