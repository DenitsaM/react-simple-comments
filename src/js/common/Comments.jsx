import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCommentsActionCreator } from '../actions/action-creator';
import { updateCommentsActionCreator } from '../actions/action-creator';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
        this.saveCommentsAction = this.saveCommentsAction.bind(this);
        this.updateComments = this.updateComments.bind(this);
        this.state = {
            commentArr: [],
            comments: '',
            maxLengthReached: false,
            isUpdate: false
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isUpdate: nextProps.isUpdate,
            comments: nextProps.comments
        });    
    }

    handleChange({ target }) {
        this.setState({ comments: target.value });
    }
    handleUpdateChange({ target }){
        this.setState({ comments: target.value });
    }
    saveCommentsAction(e) {
        e.preventDefault();
        this.state.commentArr = this.state.comments;
        this.props.saveComments(this.state.commentArr);
        this.setState({
            comments: ''
        });
      }
    updateComments(e){
        e.preventDefault();
        const sendObj = {
            comments: this.state.comments,
            id: this.props.id
        };
        this.props.updateCommentsAction(sendObj);
        this.setState({
            comments: '',
            isUpdate: false,
        });
        this.props.updatecallback(false);
      }

    render() {
        const { comments, isUpdate} = this.state;
        if(isUpdate){
            return (
                <section className="add-comments-container">
                    <form onSubmit={this.updateComments}>
                        <label>Add comments:</label>
                        <div className="form-group">
                            <input
                                type="text"
                                id="comments"
                                className="form-control"
                                value={this.state.comments}
                                onChange={this.handleUpdateChange}
                                maxLength="100"
                            />
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </section>
            );
        }
        return (
            <section className="add-comments-container">

                <form onSubmit={this.saveCommentsAction}>
                    <label>Add comments:</label>
                    <div className="form-group">
                        <input
                            type="text"
                            id="comments"
                            className="form-control"
                            value={comments}
                            onChange={this.handleChange}
                            maxLength="100"
                        />
                        <button className="btn btn-primary" disabled={!comments}>Add</button>
                    </div>
                </form>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCommentsAction: (comments) => dispatch(updateCommentsActionCreator(comments)),
        saveComments: (commentsArray) => dispatch(loadCommentsActionCreator(commentsArray))
    };
  }

export default connect(null, mapDispatchToProps)(Comments);