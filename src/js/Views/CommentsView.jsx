import React, { Component } from 'react';
import Comments from '../common/Comments';
import DisplayComments from '../common/DisplayComments';

class CommentsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      id: ""
    };
    this.updateCommentsValue = this.updateCommentsValue.bind(this);
  }
  updateCommentsValue(comments, id){
    this.setState({
      comments : comments,
      id: id
    });
  }
  render() {
   return (
    <div>
      <Comments comments={this.state.comments} id={this.state.id}/>  
      <DisplayComments callback={this.updateCommentsValue}/>
    </div>
   )
  }
}

export default CommentsView;