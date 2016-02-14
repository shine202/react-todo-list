var React = require('react');
var ReactDom = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDom.render(<ListManager title="ToDO" />, document.getElementById('todo'));
ReactDom.render(<ListManager title="Christmas" headingColor="#b31217"/>, document.getElementById('christmas'));
