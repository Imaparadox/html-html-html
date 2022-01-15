const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', htmlRoutes);

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

app.listen(PORT, () => console.log(`Hello There, ${PORT}`));