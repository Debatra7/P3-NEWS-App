import ArticleCard from './ArticleCard';
import './NewsList.css';

function NewsList({ articles }) {
  if (!articles.length) {
    return <p className="status-msg">No articles found.</p>;
  }

  return (
    <div className="news-grid">
      {articles.map((article, idx) => (
        <ArticleCard key={idx} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
