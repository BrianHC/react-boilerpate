import React from 'react'
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('app')
);
