import React, { useState, useEffect } from "react";

export default function hookDataFetchInitially() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>DataFetchInitially</h2>
      <div>
        <b>TITLE :</b> {post.title}
      </div>
    </div>
  );
}
