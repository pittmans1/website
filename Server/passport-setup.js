const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const DiscordStrategy = require('passport-discord').Strategy
require('dotenv').config();

passport.serializeUser(function(user,done){
    done(null,user.id)
});
    passport.deserializeUser(function(id,done){
        User.findById(id, function(err,user){
            done(err,user);
        })
    })
     

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //   use the profile info IE profile.id and check if user is regirster in the DB
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

var scopes = ['identify', 'email', ];

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT,
    clientSecret: process.env.DISCORD_SECRET,
    callbackURL: 'http://localhost:3000/discord/callback',
    scope: scopes
},
function(accessToken, refreshToken, profile, dones) {
    User.findOrCreate({ discordId: profile.id }, function(err, user) {
        return dones(err, user);
    });
}));