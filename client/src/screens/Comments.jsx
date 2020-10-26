import React from 'react';

export default function Comments(props){
    const {comments} = props


    return (
        <div className="comments">
            {comments.map(comment =>(
                <div key={comment.id}>
                    <p><strong>{comment.username}</strong>  {comment.content}</p>
                    
                </div>
            ))}
        </div>
    );
};

