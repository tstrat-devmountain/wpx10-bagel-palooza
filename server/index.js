const express = require('express');
const bodyParser = require('body-parser');
const bagelController = require('./controllers/bagelController');
const app = express();
app.use(bodyParser.json());

//

app.get('/api/bagels', bagelController.getBagels)

app.post('/api/bagels', bagelController.addBagel)


const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running! We did it! ${PORT}`));