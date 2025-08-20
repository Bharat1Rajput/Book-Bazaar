const express = require('express');
const app = express();

const pool = require('./db');

app.use(express.json());

// test route
app.get('/test', async (req, res) =>{
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({db_time : result.rows[0]});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Database query failed'});
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});