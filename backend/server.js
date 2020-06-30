const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const BRCA01Router = require('./routes/BRCA01');
const registersRouter = require('./routes/registers');
const contentRouter = require('./routes/contentM');
const genContextRouter = require('./routes/genContext');

app.use('/BRCA01', BRCA01Router);
app.use('/registers', registersRouter);
app.use('/contentM', contentRouter);
app.use('/genContext', genContextRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
