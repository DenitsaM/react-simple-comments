import React, { Component } from 'react';
import Comments from '../common/Comments';
import DisplayComments from '../common/DisplayComments';

class CommentsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      id: "",
      isUpdate: ''
    };
    this.updateCommentsValue = this.updateCommentsValue.bind(this);
    this.removeComments = this.removeComments.bind(this);
    this.updateEdit = this.updateEdit.bind(this);
  }
  updateCommentsValue(comments, id){
    this.setState({
      comments : comments,
      id: id,
      isUpdate: true
    });
  }
  removeComments(isUpdate){
    this.setState({
      isUpdate : isUpdate,
      comments: ''
    });
  }
  updateEdit(isUpdate){
    this.setState({
      isUpdate : isUpdate,
    });
  }
  render() {
   return (
    <div>
      <Comments comments={this.state.comments} id={this.state.id} isUpdate={this.state.isUpdate} updatecallback={this.updateEdit}/>  
      <DisplayComments callback={this.updateCommentsValue} callbackremove={this.removeComments} edit={this.state.isUpdate}/>
    </div>
   )
  }
}

export default CommentsView;