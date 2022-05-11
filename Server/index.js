let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cookieSession = require('cookie-session');
const passport = require('passport');
const api = require('../Server/Routes/user.routes')
require('./passport-setup');
// MongoDB Configuration
mongoose
  .connect('mongodb://127.0.0.1:27017/WebsInterface')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/', express.static('client'));
app.use('/api', api)
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
}) 
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
app.use(cookieSession({
  name: 'Spitty_session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next)=>{
  if(req.user){
    next()
  }else{
    res.sendStatus(401)
  }
}

app.use(passport.initialize())
app.use(passport.session())

app.get('/failed', (req, res) => res.send('You Failed Google oAuth!'))

app.get('/pass', isLoggedIn, (req, res) => res.send('Welcome ${req.user.email}'))
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email','openId','id'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

app.get('/logout', (req, res)=> {
  req.session=null
  req.logout()
  res.redirect('/Home')
})

app.get('/home', (req, res) => res.send('yes'))
app.listen(3000, ()=> console.log('listening on port 3000'))