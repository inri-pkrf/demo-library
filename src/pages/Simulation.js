import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

import '../css/Simulation.css';

import danSimulations from '../Data/districtFolder/danSimulations.js';
import haifaSimulations from '../Data/districtFolder/haifaSimulations.js';
import northSimulations from '../Data/districtFolder/northSimulations.js';
import southSimulations from '../Data/districtFolder/southSimulations.js';
import jerusalemSimulations from '../Data/districtFolder/jerusalemSimulations.js';
import pkmazSimulations from '../Data/districtFolder/pkmazSimulations.js';
// import aiSimulationData from '../Data/otherFolder/aiSimulationData.js';


// מוסיף תג מחוז אם חסר
const addMahozTag = (simulations, mahozName) =>
    simulations.map(sim => ({
        ...sim,
        tags: {
            ...sim.tags,
            mahoz: sim.tags?.mahoz?.length ? sim.tags.mahoz : [mahozName]
        }
    }));

// מאחד את כל הסימולציות
const allSimulations = [
    ...addMahozTag(danSimulations, "מחוז דן"),
    ...addMahozTag(haifaSimulations, "מחוז חיפה"),
    ...addMahozTag(northSimulations, "מחוז צפון"),
    ...addMahozTag(southSimulations, "מחוז דרום"),
    ...addMahozTag(jerusalemSimulations, "מחוז ירושלים והמרכז"),
    ...addMahozTag(pkmazSimulations, 'מחוז פקמ"ז')
];

export default function Simulation() {
    const urlParams = new URLSearchParams(window.location.search);
    const simulationId = urlParams.get('id') || allSimulations[0]?.id;

    const [simulation, setSimulation] = useState(null);
    const [relatedSimulations, setRelatedSimulations] = useState([]);
    const [loading, setLoading] = useState(true);

    function getDriveId(url) {
        try {
            const urlObj = new URL(url);
            const parts = urlObj.pathname.split('/');
            const fileIndex = parts.indexOf('d');
            if (fileIndex !== -1 && parts.length > fileIndex + 1) {
                return parts[fileIndex + 1];
            }
            // אם לא נמצא בנתיב, לנסות לקחת מהפרמטר 'id' בשאילתה
            const idParam = urlObj.searchParams.get('id');
            if (idParam) {
                return idParam;
            }
            return '';
        } catch (e) {
            return '';
        }
    }

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            const current = allSimulations.find(sim => sim.id === simulationId) || allSimulations[0];
            setSimulation(current);

            if (current) {
                const related = allSimulations
                    .filter(sim => sim.id !== current.id)
                    .filter(sim =>
                        (sim.tags.emergency || []).some(tag => (current.tags.emergency || []).includes(tag)) ||
                        (sim.tags.damage || []).some(tag => (current.tags.damage || []).includes(tag))
                    )
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
                {simulation.location && (
                    <div className='simulation-location'>
                        <img className='location-icon' src={`${process.env.PUBLIC_URL}/gps.png`} alt="מיקום" />
                        <span className='location-name'>מיקום: {simulation.location}</span>
                    </div>
                )}
                <div className="tag-container">
                    {(simulation.tags.emergency || []).map(tag => (
                        <span className="tag emergency-tag" key={`emergency-${tag}`}>{tag}</span>
                    ))}
                    {(simulation.tags.damage || []).map(tag => (
                        <span className="tag damage-tag" key={`damage-${tag}`}>{tag}</span>
                    ))}
                    {(simulation.tags.screenSize || []).map(tag => (
                        <span className="tag screen-tag" key={`screen-${tag}`}>{tag}</span>
                    ))}
                    {(simulation.tags.mahoz || []).map(tag => (
                        <span className="tag mahoz-tag" key={`mahoz-${tag}`}>{tag}</span>
                    ))}
                    {(simulation.tags.videoType || []).map(tag => (
                        <span className="tag videoType-tag" key={`video-${tag}`}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="simulation-content">
                <div className="video-container">
                    <iframe
                        className="video"
                        src={`https://drive.google.com/file/d/${getDriveId(simulation.videoUrl)}/preview`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
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
                                <div className="related-thumbnail" style={{ width: '100%', height: '200px' }}>
                                    {sim.videoUrl ? (
                                        <iframe
                                            src={`https://drive.google.com/file/d/${getDriveId(sim.videoUrl)}/preview`}
                                            width="100%"
                                            height="100%"
                                            allow="autoplay"
                                            allowFullScreen
                                            title={`Preview of ${sim.title}`}
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    ) : (
                                        <p>אין תצוגת וידאו זמינה</p>
                                    )}
                                </div>
                                <div className="related-info">
                                    <h3>{sim.title}</h3>
                                    <div className="related-tags">
                                        {(sim.tags.emergency || []).slice(0, 2).map(tag => (
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
