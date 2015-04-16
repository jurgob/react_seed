var React = require('react');

var Comment = React.createClass({
      render: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            <div>testa</div>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
          </div>
        );
      }
    });

module.exports = Comment;
