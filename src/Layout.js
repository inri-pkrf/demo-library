import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils'; 
import './css/Navigation.css'

export default function Layout({ children, currentPageName }) {
    return (
        <div className="app-container">
            <nav className="main-nav">
                <div className="nav-logo">
                    <div >
                        <img
                            src={process.env.PUBLIC_URL + '/whiteLogo.png'}
                            className="App-logo" />
                    </div>
                </div>

                <ul className="nav-links">
                    <li className={currentPageName === 'Home' ? 'active' : ''}>
                        <Link to={createPageUrl('')}>עמוד בית</Link>
                    </li>
                    <li className={currentPageName === 'Search' ? 'active' : ''}>
                        <Link to={createPageUrl('Search')}>חיפוש סימולציות </Link>
                    </li>
                    <li className={currentPageName === 'AIEngines' ? 'active' : ''}>
                        <Link to={createPageUrl('AIEngines')}> מנועי AI</Link>
                    </li>
                    <li className={currentPageName === 'PromptGenerator' ? 'active' : ''}>
                        <Link to={createPageUrl('PromptGenerator')}>מחולל פרומפטים</Link>
                    </li>
                    <li className={currentPageName === 'Contact' ? 'active' : ''}>
                        <Link to={createPageUrl('Contact')}>יצירת קשר</Link>
                    </li>
                </ul>
            </nav>

            <main className="main-content">
                {children}
            </main>

            <style>
                {`
          :root {
            --primary-color: #3366ff;
            --primary-dark: #1a53ff;
            --primary-light: #668cff;
            --accent-color: #ff3366;
            --background-dark: #121824;
            --background-medium: #1e2435;
            --background-light: #2a3249;
            --text-light: #e6e9f0;
            --text-medium: #a0a8c0;
            --text-dark: #6a7590;
            --success-color: #00cc99;
            --warning-color: #ffcc00;
            --danger-color: #ff3333;
            --card-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            --tag-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
            --border-radius: 8px;
            --transition-speed: 0.2s;
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: 'Inter', 'Segoe UI', Roboto, -apple-system, sans-serif;
            background-color: var(--background-dark);
            color: var(--text-light);
            line-height: 1.6;
          }
          
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          
          /* Responsive Adjustments */
          @media (max-width: 1024px) {
            .simulation-content {
              grid-template-columns: 1fr;
            }
            
            .ai-info-section {
              grid-template-columns: 1fr;
            }
            
            .generator-container {
              grid-template-columns: 1fr;
            }
          }
          
          @media (max-width: 768px) {
            .creator-info {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            
            .form-row {
              grid-template-columns: 1fr;
            }
          }
        `}
            </style>
        </div>
    );
}