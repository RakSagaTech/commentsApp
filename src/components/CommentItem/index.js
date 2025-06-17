// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLiked} = props
  const {id, date, comment, name, isLiked, initialClassName} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'

  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial"> {initial} </p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username"> {name} </p>
            <p className="time"> {postedTime} </p>
          </div>
          <p className="comment"> {comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img className="like-image" src={likedImgUrl} alt="like" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          type="buttob"
          className="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
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
