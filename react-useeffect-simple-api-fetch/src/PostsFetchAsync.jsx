import { useState, useEffect } from "react";

export default function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts…</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error}</p>;
  }

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}