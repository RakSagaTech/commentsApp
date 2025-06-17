// Write your code here

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, date, comment, name, isLiked} = commentDetails
  const initial = name[0]
  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className="initial-container">
          <p className="initial"> {initial} </p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username"> {name} </p>
            <p className="time"> {date} </p>
          </div>
          <p className="comment"> {comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img className="like-image" src={likedImgUrl} alt="like" />
          <button type="button" className="button">
            Like
          </button>
        </div>
        <button className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
