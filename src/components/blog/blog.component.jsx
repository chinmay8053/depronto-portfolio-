import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blog.style.scss";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const Posts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = await res.data;
      setPosts(data.slice(0, 16));
    };
    Posts();
  }, []);

  const popup = (id) => {
    console.log(id);
  };
  return (
    <div className="BLOG">
      <h1 className="blog-title">BLOG POSTS</h1>
      <div className="out-blog">
        <div className="in-blog">
          {/* <div className="cards">
            <h3 className="card-title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
            <p className="card-sub">quia et suscipit\nsuscipit recusandae consequuntur expedita</p>
          </div> */}
          {posts.map(({ body, id, title }) => {
            return (
              <div className="cards" key={id} onClick={popup.bind(this, id)}>
                <h3 className="card-title">{title.slice(0, 20)}</h3>
                <p className="card-sub">{body.slice(0, 40)}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="popup">
          {" "}
          <div className="popupMenu"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Blog;
