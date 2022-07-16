import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blog.style.scss";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const Posts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = await res.data;
      setPosts(data.slice(0, 16));
    };
    Posts();
  }, []);

  const popup = async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.data;
    setHidden(data);
  };
  console.log(hidden);
  return (
    <div className="BLOG">
      <h1 className="blog-title">BLOG POSTS</h1>
      <div className="out-blog">
        <div className="in-blog">
          {posts.map(({ body, id, title }) => {
            return (
              <div className="cards" key={id} onClick={popup.bind(this, id)}>
                <h3 className="card-title">{title.slice(0, 20)}</h3>
                <p className="card-sub">{body.slice(0, 40)}</p>
              </div>
            );
          })}
        </div>
        {hidden ? (
          <div className="popup">
            <div className="popupMenu">
              <div className="data">
                <h3>{hidden.title}</h3>
                <p>{hidden.body}</p>
                <button className="remove" onClick={() => setHidden(false)}>
                  X
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Blog;
