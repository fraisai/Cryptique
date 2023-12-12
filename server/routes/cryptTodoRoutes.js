const express = require('express');
const router = express.Router();

// CONTROLLERS
const crudController = require('../controllers/crudController');

// GET: v1/api/cryptodo/
router.get('/get', crudController.getCrypto);


// POST: v1/api/cryptodo/post
    // When you press the 'Add' button in the cryptodo page, it sends a POST request here
router.post('/post', crudController.addCrypto); 


// DELETE: /v1/api/cryptodo/:id
router.delete('/:id', crudController.deleteCrypto);


// UPDATE aka PATCH: /v1/api/cryptodo/:id
router.patch('/:id', crudController.patchCrypto);


module.exports = router;