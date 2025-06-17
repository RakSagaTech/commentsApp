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
      <div>
        <div>
          <h1> Comments </h1>
          <div>
            <form>
              <p> Say something about 4.0 Technologies </p>
              <input type="text" placeholder="Your Name" />
              <textarea rows="6" placeholder="Your Comment"></textarea>
              <button type="submit"> Add Comment </button>
            </form>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" />
          </div>
          <hr />
          <p>
            {' '}
            <span> {commentsList.length} </span> Comments{' '}
          </p>
          <ul> {this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
