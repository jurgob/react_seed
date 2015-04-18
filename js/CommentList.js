var React = require('react');
var Comment = require('./Comment');



class CommentList extends React.Component
{

  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }

};

export default CommentList;
