import React, { useState, useEffect } from 'react';
import { createPageUrl } from '../utils';
import { Link } from 'react-router-dom';
import TagFilter from '../components/TagFilter';
import '../css/Search.css';

import danSimulations from '../Data/districtFolder/danSimulations.js';
import haifaSimulations from '../Data/districtFolder/haifaSimulations.js';
import northSimulations from '../Data/districtFolder/northSimulations.js';
import southSimulations from '../Data/districtFolder/southSimulations.js';
import jerusalemSimulations from '../Data/districtFolder/jerusalemSimulations.js';
import pkmazSimulations from '../Data/districtFolder/pkmazSimulations.js';
// import aiSimulationData from '../Data/otherFolder/aiSimulationData.js';


function getFileIdFromUrl(url) {
    try {
        const urlObj = new URL(url);
        // מנסה למצוא מזהה מתוך הנתיב
        const parts = urlObj.pathname.split('/');
        const fileIndex = parts.indexOf('d');
        if (fileIndex !== -1 && parts.length > fileIndex + 1) {
            return parts[fileIndex + 1];
        }
        // אם לא מצא בנתיב, מחפש פרמטר id בשאילתה
        const idParam = urlObj.searchParams.get('id');
        if (idParam) {
            return idParam;
        }
        return null;
    } catch (e) {
        return null;
    }
}

// מוסיף תג מחוז אם חסר
const addMahozTag = (simulations, mahozName) =>
    simulations.map(sim => ({
        ...sim,
        tags: {
            ...sim.tags,
            mahoz: sim.tags?.mahoz?.length ? sim.tags.mahoz : [mahozName]
        }
    }));

export default function Search() {
    const simulationsData = [
        ...addMahozTag(danSimulations, "מחוז דן"),
        ...addMahozTag(haifaSimulations, "מחוז חיפה"),
        ...addMahozTag(northSimulations, "מחוז צפון"),
        ...addMahozTag(southSimulations, "מחוז דרום"),
        ...addMahozTag(jerusalemSimulations, "מחוז ירושלים והמרכז"),
        ...addMahozTag(pkmazSimulations, 'מחוז פקמ"ז')
    ];

    const [filteredSimulations, setFilteredSimulations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({
        emergency: [],
        damage: [],
        screenSize: [],
        mahoz: [],
        videoType: []
    });

    const filterOptions = {
        emergency: ["נפילת טיל", "שיטפון", "שריפה", "צונאמי", "אתר הרס", "מלחמה", 'כטב"מים'],
        damage: ["בית חולים", "בית ספר", "בניין מגורים", "כביש מרכזי"],
        screenSize: ["מובייל", "דסקטופ", "אימרסיבי", "טוטם", "VR"],
        mahoz: ["מחוז צפון", "מחוז חיפה", "מחוז דן", "מחוז ירושלים והמרכז", "מחוז דרום", 'מחוז פקמ"ז'],
        videoType: ["וידאו רחב", "וידאו HD", "תמונה רחבה", "תמונה HD", "סאונד"]
    };

    useEffect(() => {
        filterSimulations();
    }, [searchTerm, activeFilters]);

    const filterSimulations = () => {
        let filtered = [...simulationsData];

        if (searchTerm) {
            filtered = filtered.filter(sim =>
                sim.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

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
                newFilters[category] = newFilters[category].filter(t => t !== tag);
            } else {
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
                        placeholder="חפש לפי כותרת הסימולציה..."
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
                            onClick={() =>
                                setActiveFilters({
                                    emergency: [],
                                    damage: [],
                                    screenSize: [],
                                    mahoz: [],
                                    videoType: []
                                })
                            }
                        >
                            נקה את כל התגיות
                        </button>
                    )}
                </div>

                <div className="filters-container">
                    {Object.entries(filterOptions).map(([category, tags]) => (
                        <TagFilter
                            key={category}
                            title={{
                                emergency: "סוג מצב חירום",
                                damage: "סוג פגיעה",
                                screenSize: "גודל מסך",
                                mahoz: "שם מחוז",
                                videoType: "סוג סרטון"
                            }[category]}
                            category={category}
                            tags={tags}
                            activeFilters={activeFilters[category]}
                            onToggle={handleTagToggle}
                        />
                    ))}
                </div>
            </div>

            <div className="results-section">
                <h3>תוצאות ({filteredSimulations.length})</h3>

                {filteredSimulations.length === 0 ? (
                    <div className="no-results">
                        <p>לא נמצאו סימולציות לפי התגיות שבחרת.</p>
                        <button
                            className="clear-filters-btn"
                            onClick={() =>
                                setActiveFilters({
                                    emergency: [],
                                    damage: [],
                                    screenSize: [],
                                    mahoz: [],
                                    videoType: []
                                })
                            }
                        >
                            נקה מסננים
                        </button>
                    </div>
                ) : (
                    <div className="simulations-grid">
                        {filteredSimulations.map(simulation => {
                            const fileId = simulation.videoUrl ? getFileIdFromUrl(simulation.videoUrl) : null;
                            return (
                                <Link
                                    key={simulation.id}
                                    to={createPageUrl(`Simulation?id=${simulation.id}`)}
                                    className="simulation-card"
                                >
                                    <div className="simulation-thumbnail" style={{ width: '100%', height: '200px' }}>
                                        {fileId ? (
                                            <iframe
                                                src={`https://drive.google.com/file/d/${fileId}/preview`}
                                                width="100%"
                                                height="100%"
                                                allow="autoplay"
                                                allowFullScreen
                                                title={`Preview of ${simulation.title}`}
                                                style={{ pointerEvents: 'none' }}  
                                            />
                                        ) : (
                                            <p>אין תצוגת וידאו זמינה</p>
                                        )}
                                    </div>
                                    <div className="simulation-info">
                                        <h3>{simulation.title}</h3>
                                        <div className="simulation-tags">
                                            {simulation.tags.emergency?.slice(0, 2).map(tag => (
                                                <span className="tag emergency-tag" key={`emergency-${tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                            {simulation.tags.damage?.slice(0, 2).map(tag => (
                                                <span className="tag damage-tag" key={`damage-${tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                            {simulation.tags.mahoz?.slice(0, 2).map(tag => (
                                                <span className="tag mahoz-tag" key={`mahoz-${tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                            {simulation.tags.videoType?.slice(0, 2).map(tag => (
                                                <span className="tag videoType-tag" key={`videoType-${tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
