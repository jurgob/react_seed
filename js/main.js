var React = require('react');
var CommentList = require('./CommentList');


 var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is another comment"}
];

React.render(
        <CommentList data={data}/>,
        document.getElementById('content')
);
