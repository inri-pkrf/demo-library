import React, { useState, useEffect } from 'react';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import TagFilter from '../components/TagFilter';
import '../css/Search.css'
import simulationsData from '../Data/simulationsData.js';


export default function Search() {
    // Sample simulation data - in a real app would come from an entity
    const [simulations] = useState(simulationsData);
    const [filteredSimulations, setFilteredSimulations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({
        emergency: [],
        damage: [],
        screenSize: [],
        mahoz: [],
        videoType: []
    });

    // Filter categories and options
    const filterOptions = {
        emergency: ["נפילת טיל", "שיטפון", "שריפה", "צונאמי", "אתר הרס", "מלחמה", 'כטב"מים'],
        damage: ["בית חולים", "בית ספר", "בניין מגורים", "כביש מרכזי"],
        screenSize: ["מובייל", "דסקטופ", "אימרסיבי", "טוטם", "VR"],
        mahoz: ["צפון", "חיפה", "דן", "ירושלים והמרכז", "דרום", 'פקמ"ז'],
        videoType: ["וידאו רחב", "וידאו HD", "תמונה רחבה", "תמונה HD", "סאונד"]
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
                <h1>חיפוש סימולציות</h1>
                <p>מצא את הסימולציה המתאימה לפי התגיות ושורת החיפוש</p>

                <div className="search-bar-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="חפש סימולציות..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="searchPage-icon"></div>
                </div>
            </div>

            <div className="filter-section">
                <div className="filter-header">
                    <h2>סנן לפי תגיות</h2>
                    {Object.values(activeFilters).some(arr => arr.length > 0) && (
                        <button
                            className="clear-filters-btn"
                            onClick={() => setActiveFilters({ emergency: [], damage: [], screenSize: [], mahoz: [], videoType: [] })}
                        >
                            נקה את כל התגיות
                        </button>
                    )}
                </div>

                <div className="filters-container">
                    <TagFilter
                        title="סוג מצב חירום"
                        category="emergency"
                        tags={filterOptions.emergency}
                        activeFilters={activeFilters.emergency}
                        onToggle={handleTagToggle}
                    />

                    <TagFilter
                        title="סוג פגיעה"
                        category="damage"
                        tags={filterOptions.damage}
                        activeFilters={activeFilters.damage}
                        onToggle={handleTagToggle}
                    />

                    <TagFilter
                        title="גודל מסך"
                        category="screenSize"
                        tags={filterOptions.screenSize}
                        activeFilters={activeFilters.screenSize}
                        onToggle={handleTagToggle}
                    />

                    <TagFilter
                        title="שם מחוז"
                        category="mahoz"
                        tags={filterOptions.mahoz}
                        activeFilters={activeFilters.mahoz}
                        onToggle={handleTagToggle}
                    />

                    <TagFilter
                        title="סוג סרטון"
                        category="videoType"
                        tags={filterOptions.videoType}
                        activeFilters={activeFilters.videoType}
                        onToggle={handleTagToggle}
                    />
                </div>
            </div>

            <div className="results-section">
                <h3>תוצאות ({filteredSimulations.length})</h3>

                {filteredSimulations.length === 0 ? (
                    <div className="no-results">
                        <p>לא נמצאו סימולציות לפי התגיות שבחרת.</p>
                        <button
                            className="clear-filters-btn"
                            onClick={() => setActiveFilters({ emergency: [], damage: [], screenSize: [], mahoz: [], videoType: [] })}
                        >
                            נקה מסננים
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
                                        {simulation.tags.mahoz?.slice(0, 2).map(tag => (
                                            <span className="tag mahoz-tag" key={`mahoz-${tag}`}>{tag}</span>
                                        ))}
                                        {simulation.tags.videoType?.slice(0, 2).map(tag => (
                                            <span className="tag videoType-tag" key={`videoType-${tag}`}>{tag}</span>
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