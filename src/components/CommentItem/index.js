// Write your code here

const CommentItem = props => {
  const {commentDetails} = props
  const {id, date, comment, name, isLiked} = commentDetails
  const initial = name[0]
  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  return (
    <li>
      <div>
        <div>
          <p> {initial} </p>
        </div>
        <div>
          <div>
            <p> {name} </p>
            <p> {date} </p>
          </div>
          <p> {comment}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={likedImgUrl} alt="like" />
          <button type="button">Like</button>
        </div>
        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
