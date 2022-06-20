const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/clientRoutes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', authRoutes);
app.use('/', employeeRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
