import React from 'react';

export default function Comments(props){
    const {comments} = props


    return (
        <div>
            {comments.map(comment =>(
                <div key={comment.id}>
                    <p>{comment.username}</p>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
};

