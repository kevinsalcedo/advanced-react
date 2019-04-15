import React from "react";
import { connect } from "react-redux";
// imports all actions from actions directory
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    // Stop form from submitting
    event.preventDefault();

    // TODO - Call an action creator
    // and save the comment
    this.props.saveComment(this.state.comment);

    // Set state to empty string
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
