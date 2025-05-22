import React, { useState, useEffect } from 'react';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import TagFilter from '../components/TagFilter';

export default function Search() {
  // Sample simulation data - in a real app would come from an entity
  const [simulations, setSimulations] = useState([
    {
      id: 1,
      title: "Flood Emergency Response",
      thumbnail: "https://images.unsplash.com/photo-1596823412285-8fec816edb75?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["flood", "natural disaster"],
        damage: ["property", "infrastructure"],
        screenSize: ["large"]
      }
    },
    {
      id: 2,
      title: "Earthquake Building Evacuation",
      thumbnail: "https://images.unsplash.com/photo-1588852656350-d2b5048e6be3?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["earthquake", "evacuation"],
        damage: ["structural", "collapse"],
        screenSize: ["medium", "large"]
      }
    },
    {
      id: 3,
      title: "Fire Response Protocol",
      thumbnail: "https://images.unsplash.com/photo-1628172930073-8f46a3a8bf20?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["fire", "hazardous"],
        damage: ["fire", "smoke"],
        screenSize: ["small", "medium"]
      }
    },
    {
      id: 4,
      title: "Chemical Spill Containment",
      thumbnail: "https://images.unsplash.com/photo-1635777539573-1deba7b0b025?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["chemical", "hazardous"],
        damage: ["environmental", "health"],
        screenSize: ["large"]
      }
    },
    {
      id: 5,
      title: "Active Shooter Response",
      thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["security", "violence"],
        damage: ["personal injury"],
        screenSize: ["small", "medium", "large"]
      }
    },
    {
      id: 6,
      title: "Hurricane Evacuation Plan",
      thumbnail: "https://images.unsplash.com/photo-1571941096025-8c8ed5032f66?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["hurricane", "natural disaster"],
        damage: ["wind", "flooding", "infrastructure"],
        screenSize: ["large"]
      }
    }
  ]);

  const [filteredSimulations, setFilteredSimulations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    emergency: [],
    damage: [],
    screenSize: []
  });

  // Filter categories and options
  const filterOptions = {
    emergency: ["flood", "earthquake", "fire", "chemical", "security", "hurricane", "natural disaster", "evacuation", "hazardous", "violence"],
    damage: ["property", "infrastructure", "structural", "collapse", "fire", "smoke", "environmental", "health", "personal injury", "wind", "flooding"],
    screenSize: ["small", "medium", "large"]
  };

  useEffect(() => {
    filterSimulations();
  }, [searchTerm, activeFilters]);

  const filterSimulations = () => {
    let filtered = [...simulations];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(sim => 
        sim.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by tags
    Object.keys(activeFilters).forEach(category => {
      if (activeFilters[category].length > 0) {
        filtered = filtered.filter(sim => 
          activeFilters[category].some(tag => 
            sim.tags[category] && sim.tags[category].includes(tag)
          )
        );
      }
    });
    
    setFilteredSimulations(filtered);
  };

  const handleTagToggle = (category, tag) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      if (newFilters[category].includes(tag)) {
        // Remove tag if already selected
        newFilters[category] = newFilters[category].filter(t => t !== tag);
      } else {
        // Add tag if not selected
        newFilters[category] = [...newFilters[category], tag];
      }
      
      return newFilters;
    });
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Simulation Search</h1>
        <p>Find the right emergency simulation for your training needs</p>
        
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search simulations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon"></div>
        </div>
      </div>
      
      <div className="filter-section">
        <div className="filter-header">
          <h2>Filter by Tags</h2>
          {Object.values(activeFilters).some(arr => arr.length > 0) && (
            <button 
              className="clear-filters-btn"
              onClick={() => setActiveFilters({ emergency: [], damage: [], screenSize: [] })}
            >
              Clear All Filters
            </button>
          )}
        </div>
        
        <div className="filters-container">
          <TagFilter 
            title="Emergency Type" 
            category="emergency"
            tags={filterOptions.emergency}
            activeFilters={activeFilters.emergency}
            onToggle={handleTagToggle}
          />
          
          <TagFilter 
            title="Damage Type" 
            category="damage"
            tags={filterOptions.damage}
            activeFilters={activeFilters.damage}
            onToggle={handleTagToggle}
          />
          
          <TagFilter 
            title="Screen Size" 
            category="screenSize"
            tags={filterOptions.screenSize}
            activeFilters={activeFilters.screenSize}
            onToggle={handleTagToggle}
          />
        </div>
      </div>
      
      <div className="results-section">
        <h3>Results ({filteredSimulations.length})</h3>
        
        {filteredSimulations.length === 0 ? (
          <div className="no-results">
            <p>No simulations match your current filters.</p>
            <button onClick={() => setActiveFilters({ emergency: [], damage: [], screenSize: [] })}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="simulations-grid">
            {filteredSimulations.map(simulation => (
              <Link to={createPageUrl(`Simulation?id=${simulation.id}`)} className="simulation-card" key={simulation.id}>
                <div className="simulation-thumbnail">
                  <img src={simulation.thumbnail} alt={simulation.title} />
                </div>
                <div className="simulation-info">
                  <h3>{simulation.title}</h3>
                  <div className="simulation-tags">
                    {simulation.tags.emergency.slice(0, 2).map(tag => (
                      <span className="tag emergency-tag" key={`emergency-${tag}`}>{tag}</span>
                    ))}
                    {simulation.tags.damage.slice(0, 2).map(tag => (
                      <span className="tag damage-tag" key={`damage-${tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}