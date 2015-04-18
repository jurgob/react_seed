import React from 'react';

var CommentStyle = require('./CommentStyle.css');
var StyleSheet = require('react-style');

var Titles = StyleSheet.create({
    title: {
      'color' : 'pink'
    }
});



class Comment extends React.Component
{

  render()
  {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div  styles={[CommentStyle.comment]}  >
        <h1>Soft Banana</h1>
        <h2  styles={[Titles.title, CommentStyle.commentAuthor]}  >
          {this.props.author}
        </h2>
        <div>testa</div>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }

};

export default Comment;
