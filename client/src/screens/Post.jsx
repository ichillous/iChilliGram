import React from "react";
import { Link } from "react-router-dom"

export default function Posts(props) {
  const { posts } = props;
  console.log(props)
  return (
    <div>
      <>
        <Link className="post" to={`/posts/${props._id}`}>
            <div>
                <img className="post-img-container" src={props.img_url} alt={props.name}></img>
            </div>
        </Link>
      </>
    </div>
  );
}

