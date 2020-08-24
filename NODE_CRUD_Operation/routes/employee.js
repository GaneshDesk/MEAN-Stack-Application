const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/EmployeeController')

router.get('/', employeeController.index)
router.post('/show', employeeController.show)
router.post('/store', employeeController.store)
router.post('/update', employeeController.update)
router.post('/destroy', employeeController.destroy)

module.exports = router
