const express = require('express');

const Company = require('../models/Company');

const router = express.Router();

router.post('/cadastrar', async (req, res) => {
    try {
        const company = await Company.create(req.body);

        return res.send({ company });
    } catch (err) {
        return res.status(400).send({ error: 'Erro no cadastro' });
    }
});

module.exports = app => app.use('/create', router);