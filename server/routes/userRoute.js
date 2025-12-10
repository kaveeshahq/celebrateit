import express from 'express';
import { isAuth, login, logout, register, googleAuthCallback } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import passport from '../configs/passport.js';

const userRouter = express.Router();

// Regular auth routes
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/is-auth', authUser, isAuth);
userRouter.get('/logout', authUser, logout);

// Google OAuth routes
userRouter.get(
  '/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    session: false 
  })
);

userRouter.get(
  '/google/callback',
  passport.authenticate('google', { 
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=auth_failed`
  }),
  googleAuthCallback
);

export default userRouter;