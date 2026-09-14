import { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="flex flex-col h-[100vh] p-4">
      <h1 className="text-4xl font-bold">Posts</h1>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
