import { useEffect } from "react";
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function PostDetail(props) {
    const [post, setPost] = useState(null);
    const {id} = useParams

    useEffect(() => {
        const fetchPost = async () => {
          const postItem = await getOnePost(id);
          setPost(postItem);
        }
        fetchPost();
      }, [id])

      
    return (
        <div>
            <h3>{post.username}</h3>
            {post.map(post => (
                <p key={post.id}>{post.content}</p>
            ))}
        </div>
    );
};

