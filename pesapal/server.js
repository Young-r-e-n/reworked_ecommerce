const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const accesstoken = require('./routes/accesstoken');
const registerIPN = require('./routes/registerIPNs');
const registeredIPNs = require('./routes/registeredIPNs');
const submitOrder = require('./routes/submitOrder');
const responsePage = require('./routes/responsePage');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/pesapal', accesstoken);
app.use('/pesapal', registerIPN);
app.use('/pesapal', registeredIPNs);
app.use('/pesapal', submitOrder);
app.use('/pesapal', responsePage);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
