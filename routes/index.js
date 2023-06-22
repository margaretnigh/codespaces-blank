const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    // the data in question
    res.render('index')
})

// exported data
module.exports = router;