const express = require("express");
const client = require('./database');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('íëŠėė ');
    client.query("select * from product where start > now()", (err, rows) => {
        res.render("funding_planned", {
            rows: rows,
            session : req.session.is_logined,
        });
    });
});

module.exports = router;