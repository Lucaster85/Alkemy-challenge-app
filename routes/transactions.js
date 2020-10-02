const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactionsController');

router.get('/', transactionsController.list);

router.post('/create', transactionsController.store);

router.put('/edit/:id', transactionsController.update);

router.delete('/delete/:id', transactionsController.delete);