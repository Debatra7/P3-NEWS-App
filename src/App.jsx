import { useState, useEffect } from 'react';
import './App.css';
import CategoryNav from './components/CategoryNav';
import NewsList from './components/NewsList';

const CATEGORIES = ['technology', 'business', 'sports', 'health'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        if (!apiKey) {
          throw new Error('Missing NewsAPI key. Add VITE_NEWS_API_KEY in .env file.');
        }
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&pageSize=20&apiKey=${apiKey}`);
        const data = await res.json();
        if (data.status !== 'ok') {
          throw new Error(data.message || 'Failed to fetch news');
        }
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <h1 className="app-title">Live News</h1>
      <CategoryNav
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      {loading && <p className="status-msg">Loading...</p>}
      {error && <p className="status-msg error">{error}</p>}
      {!loading && !error && <NewsList articles={articles} />}
    </div>
  );
}

export default App
