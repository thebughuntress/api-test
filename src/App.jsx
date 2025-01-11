import React, { useEffect, useState } from "react";
import "./App.css";

import { getPosts, getPostById, getProducts } from "./api";

function App() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const number = Math.floor(Math.random() * 100) + 1;
      const post = await getPostById(number);
      setPost(post);
    } catch (error) {
      setError("Failed to fetch post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Test</h1>
        <button onClick={fetchPost} disabled={loading}>
          {loading ? "Loading..." : "Fetch Data"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && post && (
          <div>
            <h2>Data:</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                overflowY: "hidden",
                overflowX: "auto",
                maxWidth: "100%",
                padding: "10px",
                backgroundColor: "#f4f4f4",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              {JSON.stringify(post, null, 2)}
            </pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
