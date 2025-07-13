import './CategoryNav.css';

function CategoryNav({ categories, selected, onSelect }) {
  return (
    <nav className="category-nav">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`nav-btn ${selected === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNav;
