import React from "react";
import './CommentsList.css';

function CommentsList({comments}) {
    return(
        <section>
            <h3>Comments:</h3>
            {comments.map((comment, key) => (
                <section key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </section>
            ))}
        </section>
    );
}

export default CommentsList