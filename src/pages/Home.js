import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import '../css/Home.css'

export default function Home() {
    console.log("🏠 Home page rendered");

    return (
        <div className="home-container">

            <div className="hero-section">
                <h1>
                    ספריית הדמיות
                    למצבי חירום
                </h1>
                <p className="subtitle">
                    דימוי מצב אמת ברשות המקומית
                </p>

                <div className="feature-cards">
                    <Link to={createPageUrl('Search')} className="feature-card">
                        <div className="card-icon search-icon"></div>
                        <h2>
                            חיפוש הדמיות
                        </h2>
                        <p>
                            המכללה הלאומית לאיתנות ישראלית מנגישה עבורכם, מאמנים ובעלי תפקידים בשעת חירום - מאגר הדמיות שיעזור לכם לדמות מצב אמת עד כמה שניתן.

                            ניתן למיין את הקבצים בכמה דרכים, לפי התאמה למידות מסכים, רזולוציות שונות, סוג הקובץ, הרשות, מחוז ועוד.
                        </p>
                        <span className="card-action">→ ראה את הסיפרייה </span>
                    </Link>

                    <Link to={createPageUrl('AIEngines')} className="feature-card">
                        <div className="card-icon ai-icon"></div>
                        <h2>
                            מנועי AI
                        </h2>
                        <p>
                            הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר
                        </p>
                        <span className="card-action">→ חקור מנועי AI </span>
                    </Link>

                    <Link to={createPageUrl('PromptGenerator')} className="feature-card">
                        <div className="card-icon prompt-icon"></div>
                        <h2>
                            מחולל פרומפטים
                        </h2>
                        <p>
                            הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר הסבר
                        </p>
                        <span className="card-action">→ חקור מחוללים </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}