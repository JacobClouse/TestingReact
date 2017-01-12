"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page not found</h1>
                <p>Whoops! Sorry, nothing to see here</p>
                <Link to = "app">Back to home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;