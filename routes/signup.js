const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sign_up');
});

module.exports = router;