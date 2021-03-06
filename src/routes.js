"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name = "app" path = "/" handler = {require('./components/app')}>
        <DefaultRoute handler = {require('./components/homePage.jsx')} />
        <Route name = "authors" handler = {require('./components/authors/authorPage.jsx')} />
        <Route name = "about" handler = {require('./components/about/aboutPage.jsx')} />
        <NotFoundRoute handler = {require('./components/notFoundPage.jsx')} />
        <Redirect from = "about-us" to = "about" />
        <Redirect from = "awthers" to = "authors" />
        <Redirect from = "about/*" to = "about" />
    </Route>

);

module.exports = routes;
