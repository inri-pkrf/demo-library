import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import danSimulations from '../Data/danSimulations.js';
import northSimulations from '../Data/northSimulations.js';
// אם יש עוד מחוזות - ייבא כאן

import '../css/Simulation.css';

// מוסיף תג מחוז אם חסר, כמו ב-Search
const addMahozTag = (simulations, mahozName) =>
    simulations.map(sim => ({
        ...sim,
        tags: {
            ...sim.tags,
            mahoz: sim.tags?.mahoz?.length ? sim.tags.mahoz : [mahozName]
        }
    }));

// מאחד את כל הדאטה עם תגית מחוז
const allSimulations = [
    ...addMahozTag(danSimulations, "דן"),
    ...addMahozTag(northSimulations, "צפון"),
    // הוסף פה מחוזות נוספים אם יש
];

export default function Simulation() {
    const urlParams = new URLSearchParams(window.location.search);
    const simulationId = urlParams.get('id') || allSimulations[0].id;
    const [simulation, setSimulation] = useState(null);
    const [relatedSimulations, setRelatedSimulations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            const currentSimulation = allSimulations.find(sim => sim.id === simulationId) || allSimulations[0];
            setSimulation(currentSimulation);

            if (currentSimulation) {
                const related = allSimulations
                    .filter(sim => sim.id !== currentSimulation.id)
                    .filter(sim => {
                        const emergencyOverlap = sim.tags.emergency.some(tag =>
                            currentSimulation.tags.emergency.includes(tag)
                        );
                        const damageOverlap = sim.tags.damage.some(tag =>
                            currentSimulation.tags.damage.includes(tag)
                        );
                        return emergencyOverlap || damageOverlap;
                    })
                    .slice(0, 3);

                setRelatedSimulations(related);
            }

            setLoading(false);
        }, 800);
    }, [simulationId]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>טוען סימולציה...</p>
            </div>
        );
    }

    if (!simulation) {
        return (
            <div className="not-found-container">
                <h1>הסימולציה לא נמצאה</h1>
                <p>לא הצלחנו לאתר את הסימולציה שביקשת.</p>
                <Link to={createPageUrl('Search')} className="back-button">
                    חזרה לחיפוש
                </Link>
            </div>
        );
    }

    return (
        <div className="simulation-page">
            <Link to={createPageUrl('Search')} className="back-button">
                → חזרה לחיפוש
            </Link>

            <div className="simulation-header">
                <h1>{simulation.title}</h1>
                <div className='simulation-location'>
                    <img className='location-icon' src={`${process.env.PUBLIC_URL}/gps.png`} alt="מיקום" />
                    <span className='location-name'> מיקום: {simulation.location}</span>
                </div>
                <div className="tag-container">
                    {simulation.tags.emergency.map(tag => (
                        <span className="tag emergency-tag" key={`emergency-${tag}`}>{tag}</span>
                    ))}
                    {simulation.tags.damage.map(tag => (
                        <span className="tag damage-tag" key={`damage-${tag}`}>{tag}</span>
                    ))}
                    {simulation.tags.screenSize.map(tag => (
                        <span className="tag screen-tag" key={`screen-${tag}`}>{tag}</span>
                    ))}
                    {simulation.tags.mahoz?.map(tag => (
                        <span className="tag mahoz-tag" key={`mahoz-${tag}`}>{tag}</span>
                    ))}
                    {simulation.tags.videoType?.map(tag => (
                        <span className="tag videoType-tag" key={`video-${tag}`}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="simulation-content">
                <div className="video-container">
                    <video
                        className="video"
                        controls
                        style={{ width: '100%', cursor: 'pointer' }}
                        src={`${process.env.PUBLIC_URL}${simulation.videoUrl}`}
                    >
                        הדפדפן שלך לא תומך בווידאו.
                    </video>
                </div>

                <div className="simulation-details">
                    <h2>פרטי הסימולציה</h2>
                    <p>{simulation.description}</p>

                    <div className="simulation-actions">
                        <button className="action-button download-button">
                            הורד סימולציה
                        </button>
                        <button className="action-button share-button">
                            שתף סימולציה
                        </button>
                    </div>
                </div>
            </div>

            {relatedSimulations.length > 0 && (
                <div className="related-simulations">
                    <h2>סימולציות דומות</h2>
                    <div className="related-grid">
                        {relatedSimulations.map(sim => (
                            <Link to={createPageUrl(`Simulation?id=${sim.id}`)} className="related-card" key={sim.id}>
                                <div className="related-thumbnail">
                                    {/* אם יש תמונת מיני-תמונה */}
                                    {sim.thumbnail ? (
                                        <img src={sim.thumbnail} alt={sim.title} />
                                    ) : (
                                        <video
                                            src={`${process.env.PUBLIC_URL}${sim.videoUrl}`}
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }}
                                            preload="metadata"
                                            onLoadedData={(e) => {
                                                try {
                                                    e.currentTarget.currentTime = 1;
                                                } catch (err) {
                                                    console.error("Can't seek to frame:", err);
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="related-info">
                                    <h3>{sim.title}</h3>
                                    <div className="related-tags">
                                        {sim.tags.emergency.slice(0, 2).map(tag => (
                                            <span className="tag emergency-tag small" key={`rel-emergency-${tag}`}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
