import { useEffect, useState } from "react";

const Tech = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://forumsystemboard.onrender.com/getposts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const glassContainerStyle = {
    background: "rgba(15, 14, 14, 0.6)",
    borderRadius: "15px",
    padding: "20px",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    background: "rgba(13, 12, 12, 0.3)",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={glassContainerStyle}>
        <h1>Tech Posts</h1>
        <ul style={listStyle}>
          {posts.map((post) => (
            <li key={post._id} style={listItemStyle}>
              {post.title}
              {post.content}
              {post.userId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tech;
