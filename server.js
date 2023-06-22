// check to see if environment variables are same as production
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse;
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const { process_params } = require('express/lib/router');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// MongoDB
const mongoose = require('mongoose');
// env Environment Variables Local
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
// error printed if not connected
db.on('error', error => console.error(error));
// connected to mongoose
db.once('open', () => console.log('Connected to MongoDB'));

// Index router root
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);