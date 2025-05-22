import React from 'react';

export default function TagFilter({ title, category, tags, activeFilters, onToggle }) {
  return (
    <div className="tag-filter">
      <h3>{title}</h3>
      <div className="tags-container">
        {tags.map(tag => (
          <div 
            key={tag}
            className={`filter-tag ${activeFilters.includes(tag) ? 'active' : ''}`}
            onClick={() => onToggle(category, tag)}
          >
            {tag.replace(/_/g, ' ')}
          </div>
        ))}
      </div>
    </div>
  );
}