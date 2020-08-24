
const Employee = require('../models/Employee')
const { response } = require('express')

// show the list of employees

const index = (req, res, next) => {
    Employee.find().then(response => {
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
                message: 'Error occoured'
            })
        })
}

// show info of single employee using id
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occoured'
            })
        })
}

// Add employee into DB
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        desiganation: req.body.desiganation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee added successfully'
        })
    })
    .catch(error => {
        res.json({
           message: 'Error occoured !'
        })
    })
}

// update employee info using ID
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        desiganation: req.body.desiganation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, { $set: updateData })
    .then(() => {
        res.json({
            message: 'Employee update successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occoured'
        })
    })
}

//Delete employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID
    
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'employee delete sucessfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'Error occoured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}