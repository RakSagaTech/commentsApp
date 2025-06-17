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
    commentsList: [
      {
        id: uuidv4(),
        name: 'Richard Branson',
        date: '2 minutes ago',
        comment: 'Thanks for being so typically',
        isLiked: false,
      },
    ],
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  render() {
    const {commentsList} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading"> Comments </h1>
          <div className="comments-input">
            <form className="form">
              <p className="form-description">
                {' '}
                Say something about 4.0 Technologies{' '}
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="comment-input"
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
