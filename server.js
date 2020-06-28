const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Load Env
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000;

//Compare Routes
app.use('/api/v1/compare', require('./routes/compare'));

//Serve static assets if in production 
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server running on PORT ${port}`));