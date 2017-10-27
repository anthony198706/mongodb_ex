const app = require('express')();
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./router')(app, stripe)

const server = app.listen(process.env.PORT || 4000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});