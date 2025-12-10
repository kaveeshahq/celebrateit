import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log('Google Profile:', profile);
        
        // Check if user already exists
        let user = await User.findOne({ googleId: profile.id });
        console.log('User with googleId:', user);

        if (user) {
          console.log('Existing Google user found:', user.email);
          return done(null, user);
        }

        // Check if user exists with the same email
        user = await User.findOne({ email: profile.emails[0].value });
        console.log('User with email:', user);

        if (user) {
          // Link Google account to existing user
          console.log('Linking Google to existing user:', user.email);
          user.googleId = profile.id;
          await user.save();
          return done(null, user);
        }

        // Create new user
        console.log('Creating new user with email:', profile.emails[0].value);
        user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          password: 'google-oauth-' + Date.now(), // Placeholder password
        });
        console.log('New user created:', user);

        done(null, user);
      } catch (error) {
        console.error('Passport Google Strategy Error:', error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;