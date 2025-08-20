const express = require('express');
const app = express();
const pool = require('./db');
const authRoutes = require('./routes/auth');


app.use(express.json());
app.use('/api/auth', authRoutes);


// test route
app.get('/', async (req, res) =>{
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