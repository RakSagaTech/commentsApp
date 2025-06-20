import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        deleteComment={this.deleteComment}
        toggleIsLiked={this.toggleIsLiked}
      />
    ))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading"> Comments </h1>
          <div className="comments-input">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                {' '}
                Say something about 4.0 Technologies{' '}
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeNameInput}
                value={nameInput}
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onChangeCommentInput}
                value={commentInput}
              />
              <button type="submit" className="add-button">
                {' '}
                Add Comment{' '}
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            {' '}
            <span className="comments-count"> {commentsList.length} </span>{' '}
            Comments{' '}
          </p>
          <ul className="comments-list"> {this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
