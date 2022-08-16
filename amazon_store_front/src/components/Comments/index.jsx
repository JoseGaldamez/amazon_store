import React from "react";
import "./Comments.css";
const urlBase = "http://localhost:8080/images/user.webp";

export const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <div key={`comment-${index}`} className="comment">
          <div className="row">
            <div className="col-2">
              <img
                className="comment-image"
                src={`${urlBase}`}
                alt={comment.userName}
              />
            </div>
            <div className="col-10 comment-text">
              <h5>{comment.userName}</h5>
              <p>{comment.textComment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
