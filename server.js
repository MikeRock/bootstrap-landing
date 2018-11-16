import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import passport from 'passport'
import mongoose from 'mongoose'
import {Strategy as LocalStrategy} from 'passport-local'
import path from 'path';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
dotenv.config();
passport.use(new LocalStrategy({
  usernameField: username,
  passwordField: password
},(username, password, done) => {
done(null,false,{message: 'User not found'})
}))
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(morgan());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(
  session({
    secret: 'lolrotfl',
    cookie: {
      maxAge: 60000,
      secure: false,
      httpOnly: false
    },
    resave: false,
    saveUninitialized: false
  })
);

app.post('/auth/bearer',(req,res) => {
  const token = req.headers.authorization.split(' ')[1]
  
})
app.post('/auth/local', (req, res) => {
passport.authenticate('local',(err,user,flash) => {
  if (err) res.json({message: 'Error', err})
  if(!user) res.json(flash)
  res.send({message: 'User authenticated', user})
})
})(req, res)
app.get('*', (req, res) => {
  res.send(path.resolve(__dirname, 'index.html'));
});

const server = app.listen(PORT, err => {
  console.log(`Server listening on port ${server.address().port}`);
});
