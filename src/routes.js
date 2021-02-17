const routes = require('express').Router()
const User = require('./controllers/UsersController')
const Addresses = require('./controllers/AddressesController')
const Techs = require('./controllers/TechsController')
const Reports = require('./controllers/ReportController')

routes.post('/users', User.store)
routes.get('/users', User.index)

routes.post('/users/:user_id/addresses', Addresses.store)
routes.get('/users/:user_id/addresses', Addresses.index)

routes.post('/users/:user_id/techs', Techs.store)
routes.get('/users/:user_id/techs', Techs.index)
routes.get('/users/techs', Techs.findAll)
routes.delete('/users/:user_id/techs', Techs.delete)

routes.get('/reports/:email/:street/:tech', Reports.show)

module.exports = routes