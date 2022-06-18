const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.json('Hello from nodeJS');
});

app.use('/', authRoutes);
app.use('/', clientRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

