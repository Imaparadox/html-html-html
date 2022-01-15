const htmlPath = require('path');
const router = require('express').Router();

router.get('*', (req, res) => {
    res.sendFile(htmlPath.join(__dirname, '../public/index.html'));
});

module.exports = router;