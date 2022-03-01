const express = require('express');
const router = express.Router();

const services = require('../services/mapper');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET
 */
router.get('/', services.homeRoutes);

/**
 * @description Add users
 * @method POST
 */
router.get('/add-user', services.add_user);

/**
 * @description Update User
 * @method PUT
 */
router.get('/update-user', services.update_user);

// API
router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);


module.exports = router