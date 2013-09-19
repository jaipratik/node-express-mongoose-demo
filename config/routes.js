/*!
 * Module dependencies.
 */

var async = require('async')

/**
 * Controllers
 */

var users = require('../app/controllers/users')
  , articles = require('../app/controllers/articles')
  , rooms = require('../app/controllers/rooms')
  , home = require('../app/controllers/home')
  , auth = require('./middlewares/authorization')

/**
 * Route middlewares
 */

var articleAuth = [auth.requiresLogin, auth.article.hasAuthorization]

var roomAuth = [auth.requiresLogin, auth.room.hasAuthorization]



/**
 * Expose routes
 */

module.exports = function (app, passport) {

  // user routes
  app.get('/login', users.login)
  app.get('/signup', users.signup)
  app.get('/logout', users.logout)
  app.post('/users', users.create)
  app.post('/users/session',
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: 'Invalid email or password.'
    }), users.session)
  app.get('/users/:userId', users.show)
  app.get('/auth/facebook',
    passport.authenticate('facebook', {
      scope: [ 'email', 'user_about_me'],
      failureRedirect: '/login'
    }), users.signin)
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }), users.authCallback)
  app.get('/auth/github',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }), users.signin)
  app.get('/auth/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }), users.authCallback)
  app.get('/auth/twitter',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }), users.signin)
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }), users.authCallback)
  app.get('/auth/google',
    passport.authenticate('google', {
      failureRedirect: '/login',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }), users.signin)
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login'
    }), users.authCallback)
  app.get('/auth/linkedin',
    passport.authenticate('linkedin', {
      failureRedirect: '/login',
      scope: [ 
        'r_emailaddress'
      ]
    }), users.signin)
  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      failureRedirect: '/login'
    }), users.authCallback)

  app.param('userId', users.user)

  // article routes
  app.get('/articles', articles.index)
  app.get('/articles/new', auth.requiresLogin, articles.new)
  app.post('/articles', auth.requiresLogin, articles.create)
  app.get('/articles/:id', articles.show)
  app.get('/articles/:id/edit', articleAuth, articles.edit)
  app.put('/articles/:id', articleAuth, articles.update)
  app.del('/articles/:id', articleAuth, articles.destroy)

  app.param('id', articles.load)


   // rooms routes

  app.get('/rooms-home', rooms.roomhome)

  app.get('/rooms', rooms.index)
  app.get('/rooms/new', auth.requiresLogin, rooms.new)
  app.post('/rooms', auth.requiresLogin, rooms.create)
  app.get('/rooms/:rm', rooms.show)
  app.get('/rooms_first/:rm', rooms.show_first)
  // app.get('/rooms-first/:id', rooms.show_first)



  app.get('/rooms/:rm/edit', roomAuth, rooms.edit)
  app.put('/rooms/:rm', roomAuth, rooms.update)
  app.del('/rooms/:rm', roomAuth, rooms.destroy)

  app.param('rm', rooms.load)
 
 // tag routes
  var rtags = require('../app/controllers/rtags')
  app.get('/indian-roommates-in/:tag', rtags.index)



  // home route
  app.get('/', rooms.roomhome)

  app.get('/home', home.index)

  // comment routes
  var comments = require('../app/controllers/comments')
  app.post('/articles/:id/comments', auth.requiresLogin, comments.create)
  app.get('/articles/:id/comments', auth.requiresLogin, comments.create)

  // tag routes
  var tags = require('../app/controllers/tags')
  app.get('/tags/:tag', tags.index)

}



















