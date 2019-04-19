import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCommentsActionCreator } from '../actions/action-creator';

class DisplayCommentsView extends Component {
  constructor(props) {
    super(props);
    this.removeComments = this.removeComments.bind(this);
    this.updateCommentsValue = this.updateCommentsValue.bind(this);
    this.state = {
        isUpdate: false,
        clicked:''
    };
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        isUpdate: nextProps.edit
      });  
  }
  removeComments(e){
    const value =  e.currentTarget.getAttribute('comment');
    this.props.removeCommentsAction(value);
    const isUpdate = false;
    this.props.callbackremove(isUpdate);
  }

  updateCommentsValue(e){
    const value =  e.currentTarget.getAttribute('comment');
    const id =  e.currentTarget.getAttribute('data-id');
    this.props.callback(value, id);
    this.setState({ isUpdate: true, clicked: id });
  }
  render() {
    const commentsData = [].concat(this.props.comments).reverse();
        return (
            <div className="comments-section">
              <h3>Comments:</h3>
              {
              commentsData.map((result, i) =>
                  <div key={i} className="comments-wrap">
                      <span>{result}</span>
                      <div className="edit-container">
                          <span className={"icon-pencil" + (this.state.isUpdate && this.state.clicked == i? ' disable' : '')} onClick={this.updateCommentsValue} comment={result} data-id={i}></span>
                          <span className="icon-cross" onClick={this.removeComments} comment={result}></span>
                      </div>
                  </div>
                )
              }
            </div>
        );
  }
}

function mapStateToProps(comments) {
    return comments;
}

function mapDispatchToProps(dispatch) {
    return {
        removeCommentsAction(comments) {
            const action = deleteCommentsActionCreator(comments);
            dispatch(action);
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCommentsView);

