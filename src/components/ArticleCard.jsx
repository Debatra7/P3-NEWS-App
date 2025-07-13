import './ArticleCard.css';

function ArticleCard({ article }) {
  const { title, urlToImage, source, url } = article;
  return (
    <div className="article-card">
      {urlToImage && (
        <img src={urlToImage} alt={title} className="article-img" />
      )}
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-source">Source: {source?.name}</p>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Read More
          </a>
        ) : (
          <span className="read-more disabled">No link</span>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;
