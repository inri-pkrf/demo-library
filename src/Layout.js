import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils'; // Corrected path

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
                    {/* <span className="logo-text">EmergencySim</span> */}
                </div>

                <ul className="nav-links">
                    <li className={currentPageName === 'Home' ? 'active' : ''}>
                        <Link to={createPageUrl('Home')}>עמוד בית</Link>
                    </li>
                    <li className={currentPageName === 'Search' ? 'active' : ''}>
                        <Link to={createPageUrl('Search')}>חיפוש סימולציות </Link>
                    </li>
                    <li className={currentPageName === 'AIEngines' ? 'active' : ''}>
                        <Link to={createPageUrl('AIEngines')}>AI מנועי</Link>
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

            {/* <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>EmergencySim</span>
            <p>Advanced emergency simulation library for local authorities</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Site Map</h3>
              <ul>
                <li><Link to={createPageUrl('Home')}>Home</Link></li>
                <li><Link to={createPageUrl('Search')}>Simulation Search</Link></li>
                <li><Link to={createPageUrl('AIEngines')}>AI Engines</Link></li>
                <li><Link to={createPageUrl('PromptGenerator')}>Prompt Generator</Link></li>
                <li><Link to={createPageUrl('Contact')}>Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Access</a></li>
                <li><a href="#">Training Materials</a></li>
                <li><a href="#">Research Papers</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Data Usage</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Emergency Simulation Library. All rights reserved.</p>
        </div>
      </footer> */}

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
          
          /* Navigation Styles */
          .main-nav {
            background-color: var(--background-medium);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          
          .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }
          
          .App-logo {
            width: 10vw;
          }
          
          
          .logo-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-light);
            letter-spacing: -0.5px;
          }
          
          .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
          }
          
          .nav-links li a {
            color: var(--text-medium);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            transition: color var(--transition-speed) ease;
            padding: 0.5rem 0;
          }
          
          .nav-links li a:hover,
          .nav-links li.active a {
            color: var(--text-light);
          }
          
          .nav-links li.active {
            position: relative;
          }
          
          .nav-links li.active:after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 2px;
          }
          
          /* Main Content */
          .main-content {
            flex: 1;
            padding: 2rem;
            max-width: 1440px;
            margin: 0 auto;
            width: 100%;
          }
          
          /* Footer Styles */
          .main-footer {
            background-color: var(--background-medium);
            color: var(--text-medium);
            padding: 3rem 2rem 1rem;
            margin-top: 3rem;
          }
          
          .footer-content {
            display: flex;
            justify-content: space-between;
            max-width: 1440px;
            margin: 0 auto;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .footer-logo {
            flex: 1;
            min-width: 250px;
          }
          
          .footer-logo span {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-light);
            display: block;
            margin-bottom: 1rem;
          }
          
          .footer-logo p {
            color: var(--text-dark);
            max-width: 300px;
          }
          
          .footer-links {
            display: flex;
            gap: 3rem;
            flex-wrap: wrap;
          }
          
          .footer-links-column h3 {
            color: var(--text-light);
            font-size: 1rem;
            margin-bottom: 1.25rem;
            font-weight: 600;
          }
          
          .footer-links-column ul {
            list-style: none;
          }
          
          .footer-links-column ul li {
            margin-bottom: 0.75rem;
          }
          
          .footer-links-column ul li a {
            color: var(--text-dark);
            text-decoration: none;
            transition: color var(--transition-speed) ease;
          }
          
          .footer-links-column ul li a:hover {
            color: var(--primary-light);
          }
          
          .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            margin-top: 2rem;
            border-top: 1px solid var(--background-light);
            max-width: 1440px;
            margin: 2rem auto 0;
          }
          
          .footer-bottom p {
            color: var(--text-dark);
            font-size: 0.875rem;
          }
          
          /* Home Page Styles */
          .home-container {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          
          .hero-section {
            text-align: center;
            margin: 2rem 0 4rem;
          }
          
          .hero-section h1 {
            font-size: 5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            font-family: 'Karantina', cursive;
          }
          
          .subtitle {
            font-size: 1.25rem;
            color: var(--text-medium);
            max-width: 800px;
            margin: 0 auto 3rem;
          }
          
          .feature-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .feature-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: var(--card-shadow);
            transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: var(--text-light);
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          }
          
          .card-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .search-icon {
            background: linear-gradient(135deg, #3366ff, #00ccff);
          }
          
          .ai-icon {
            background: linear-gradient(135deg, #ff3366, #ff6633);
          }
          
          .prompt-icon {
            background: linear-gradient(135deg, #9900cc, #cc00ff);
          }
          
          .search-icon:before,
          .ai-icon:before,
          .prompt-icon:before {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
          }
          
          .feature-card h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          
          .feature-card p {
            color: var(--text-medium);
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          
          .card-action {
            color: var(--primary-color);
            font-weight: 600;
            margin-top: auto;
            transition: color var(--transition-speed) ease;
          }
          
          .feature-card:hover .card-action {
            color: var(--primary-light);
          }
          
          /* Search Page Styles */
          .search-page {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          
          .search-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .search-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          
          .search-header p {
            color: var(--text-medium);
            margin-bottom: 2rem;
          }
          
          .search-bar-container {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
          }
          
          .search-input {
            width: 100%;
            padding: 1rem 1.5rem;
            background-color: var(--background-light);
            border: 2px solid transparent;
            border-radius: var(--border-radius);
            color: var(--text-light);
            font-size: 1rem;
            transition: all var(--transition-speed) ease;
          }
          
          .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(51, 102, 255, 0.2);
          }
          
          .search-input::placeholder {
            color: var(--text-dark);
          }
          
          .search-icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1.5rem;
            height: 1.5rem;
            pointer-events: none;
          }
          
          .filter-section {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .filter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          
          .filter-header h2 {
            font-size: 1.25rem;
            font-weight: 600;
          }
          
          .clear-filters-btn {
            background: none;
            border: none;
            color: var(--primary-color);
            font-size: 0.875rem;
            cursor: pointer;
            transition: color var(--transition-speed) ease;
          }
          
          .clear-filters-btn:hover {
            color: var(--primary-light);
          }
          
          .filters-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .tag-filter h3 {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.75rem;
            color: var(--text-medium);
          }
          
          .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          
          .filter-tag {
            padding: 0.5rem 1rem;
            background-color: var(--background-light);
            border-radius: 100px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all var(--transition-speed) ease;
            text-transform: capitalize;
          }
          
          .filter-tag:hover {
            background-color: rgba(51, 102, 255, 0.1);
          }
          
          .filter-tag.active {
            background-color: var(--primary-color);
            color: white;
          }
          
          .results-section h3 {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }
          
          .simulations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          .simulation-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--card-shadow);
            transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
            text-decoration: none;
            color: var(--text-light);
          }
          
          .simulation-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }
          
          .simulation-thumbnail {
            width: 100%;
            height: 180px;
            overflow: hidden;
          }
          
          .simulation-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .simulation-card:hover .simulation-thumbnail img {
            transform: scale(1.05);
          }
          
          .simulation-info {
            padding: 1.25rem;
          }
          
          .simulation-info h3 {
            font-size: 1.125rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
          }
          
          .simulation-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          
          .tag {
            padding: 0.25rem 0.75rem;
            border-radius: 100px;
            font-size: 0.75rem;
            text-transform: capitalize;
          }
          
          .emergency-tag {
            background-color: rgba(255, 51, 102, 0.15);
            color: #ff6680;
          }
          
          .damage-tag {
            background-color: rgba(255, 204, 0, 0.15);
            color: #ffcc00;
          }
          
          .screen-tag {
            background-color: rgba(0, 204, 153, 0.15);
            color: #00cc99;
          }
          
          .no-results {
            text-align: center;
            padding: 3rem;
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
          }
          
          .no-results p {
            margin-bottom: 1.5rem;
            color: var(--text-medium);
          }
          
          .no-results button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 100px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color var(--transition-speed) ease;
          }
          
          .no-results button:hover {
            background-color: var(--primary-dark);
          }
          
          /* Simulation Page Styles */
          .simulation-page {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          
          .back-button {
            display: inline-flex;
            align-items: center;
            color: var(--text-medium);
            text-decoration: none;
            transition: color var(--transition-speed) ease;
            margin-bottom: 1rem;
          }
          
          .back-button:hover {
            color: var(--text-light);
          }
          
          .simulation-header {
            margin-bottom: 2rem;
          }
          
          .simulation-header h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          
          .tag-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          
          .simulation-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
          }
          
          .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            border-radius: var(--border-radius);
            background-color: var(--background-medium);
          }
          
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          
          .simulation-details {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 1.5rem;
          }
          
          .simulation-details h2 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .simulation-details p {
            color: var(--text-medium);
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          
          .simulation-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .action-button {
            padding: 0.75rem;
            border-radius: var(--border-radius);
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-speed) ease;
          }
          
          .download-button {
            background-color: var(--primary-color);
            color: white;
          }
          
          .download-button:hover {
            background-color: var(--primary-dark);
          }
          
          .share-button {
            background-color: var(--background-light);
            color: var(--text-light);
          }
          
          .share-button:hover {
            background-color: var(--background-dark);
          }
          
          .related-simulations {
            margin-top: 3rem;
          }
          
          .related-simulations h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }
          
          .related-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
          }
          
          .related-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            overflow: hidden;
            text-decoration: none;
            color: var(--text-light);
            transition: transform var(--transition-speed) ease;
          }
          
          .related-card:hover {
            transform: translateY(-5px);
          }
          
          .related-thumbnail {
            height: 150px;
            overflow: hidden;
          }
          
          .related-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .related-card:hover .related-thumbnail img {
            transform: scale(1.05);
          }
          
          .related-info {
            padding: 1rem;
          }
          
          .related-info h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .related-tags {
            display: flex;
            gap: 0.5rem;
          }
          
          .tag.small {
            padding: 0.2rem 0.5rem;
            font-size: 0.7rem;
          }
          
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 60vh;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(51, 102, 255, 0.2);
            border-radius: 50%;
            border-top-color: var(--primary-color);
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          .not-found-container {
            text-align: center;
            padding: 4rem 2rem;
          }
          
          .not-found-container h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .not-found-container p {
            color: var(--text-medium);
            margin-bottom: 2rem;
          }
          
          /* AI Engines Page */
          .ai-engines-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          
          .ai-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .ai-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          
          .ai-header p {
            color: var(--text-medium);
          }
          
          .ai-tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .ai-tool-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            box-shadow: var(--card-shadow);
            transition: transform var(--transition-speed) ease;
          }
          
          .ai-tool-card:hover {
            transform: translateY(-5px);
          }
          
          .tool-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 1.5rem;
          }
          
          .scenario-icon {
            background: linear-gradient(135deg, #00ccff, #0066ff);
          }
          
          .resource-icon {
            background: linear-gradient(135deg, #ff6633, #ff3366);
          }
          
          .evaluator-icon {
            background: linear-gradient(135deg, #00cc99, #00ffcc);
          }
          
          .predictor-icon {
            background: linear-gradient(135deg, #cc00ff, #9900cc);
          }
          
          .ai-tool-card h2 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .ai-tool-card p {
            color: var(--text-medium);
            margin-bottom: 1.5rem;
            flex-grow: 1;
          }
          
          .tool-button {
            background-color: var(--background-light);
            color: var(--text-light);
            border: none;
            padding: 0.75rem;
            border-radius: var(--border-radius);
            font-weight: 500;
            cursor: pointer;
            transition: background-color var(--transition-speed) ease;
            width: 100%;
          }
          
          .tool-button:hover {
            background-color: var(--primary-color);
          }
          
          .ai-info-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }
          
          .info-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2rem;
          }
          
          .info-card h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .info-card p {
            color: var(--text-medium);
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          
          .tech-showcase {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          
          .tech-visual {
            height: 200px;
            background: linear-gradient(45deg, var(--primary-dark), var(--primary-color), var(--primary-light));
            position: relative;
            overflow: hidden;
          }
          
          .tech-visual:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.05) 10px,
              rgba(255, 255, 255, 0.05) 20px
            );
          }
          
          .tech-specs {
            padding: 1.5rem;
          }
          
          .tech-specs h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .tech-specs ul {
            list-style: none;
          }
          
          .tech-specs ul li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.75rem;
            color: var(--text-medium);
          }
          
          .tech-specs ul li:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 8px;
            height: 8px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
          
          /* Prompt Generator Page */
          .prompt-generator-page {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          
          .generator-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .generator-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          
          .generator-header p {
            color: var(--text-medium);
          }
          
          .generator-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .input-section {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2rem;
          }
          
          .input-section h2 {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }
          
          .input-group {
            margin-bottom: 1.5rem;
          }
          
          .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
          
          .input-group input,
          .input-group select,
          .input-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background-color: var(--background-light);
            border: 2px solid transparent;
            border-radius: var(--border-radius);
            color: var(--text-light);
            font-size: 1rem;
            transition: all var(--transition-speed) ease;
          }
          
          .input-group input:focus,
          .input-group select:focus,
          .input-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(51, 102, 255, 0.1);
          }
          
          .input-group input::placeholder,
          .input-group select::placeholder,
          .input-group textarea::placeholder {
            color: var(--text-dark);
          }
          
          .checkbox-group {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 0.75rem;
          }
          
          .checkbox-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .checkbox-item input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          
          .generate-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: var(--border-radius);
            font-weight: 500;
            cursor: pointer;
            transition: background-color var(--transition-speed) ease;
            width: 100%;
            margin-top: 1rem;
          }
          
          .generate-button:hover {
            background-color: var(--primary-dark);
          }
          
          .generate-button:disabled {
            background-color: var(--background-light);
            color: var(--text-dark);
            cursor: not-allowed;
          }
          
          .output-section {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2rem;
            display: flex;
            flex-direction: column;
          }
          
          .output-section h2 {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }
          
          .prompt-output {
            background-color: var(--background-light);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            flex-grow: 1;
            overflow-y: auto;
            max-height: 400px;
          }
          
          .prompt-output pre {
            white-space: pre-wrap;
            font-family: inherit;
            line-height: 1.6;
            color: var(--text-light);
          }
          
          .prompt-actions {
            display: flex;
            gap: 1rem;
          }
          
          .copy-button,
          .save-button {
            flex: 1;
            padding: 0.75rem;
            border-radius: var(--border-radius);
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-speed) ease;
          }
          
          .copy-button {
            background-color: var(--background-light);
            color: var(--text-light);
          }
          
          .copy-button:hover {
            background-color: var(--background-dark);
          }
          
          .save-button {
            background-color: var(--primary-color);
            color: white;
          }
          
          .save-button:hover {
            background-color: var(--primary-dark);
          }
          
          .empty-prompt {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--text-dark);
            padding: 3rem;
          }
          
          .empty-prompt p {
            margin-bottom: 0.5rem;
          }
          
          .empty-prompt .hint {
            font-size: 0.875rem;
            opacity: 0.7;
          }
          
          .prompt-tips {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2rem;
          }
          
          .prompt-tips h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .prompt-tips ul {
            list-style: none;
          }
          
          .prompt-tips ul li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.75rem;
            color: var(--text-medium);
          }
          
          .prompt-tips ul li:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 8px;
            height: 8px;
            background-color: var(--primary-color);
            border-radius: 50%;
          }
          
          /* Contact Page */
          .contact-page {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          
          .contact-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .contact-header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          
          .contact-header p {
            color: var(--text-medium);
          }
          
          .contact-card {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          
          .creator-info {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
          }
          
          .creator-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            flex-shrink: 0;
          }
          
          .creator-details h2 {
            font-size: 1.75rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
          }
          
          .creator-title {
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .creator-bio {
            color: var(--text-medium);
            line-height: 1.6;
          }
          
          .contact-methods {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .contact-method {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .contact-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          
          .email-icon {
            background: linear-gradient(135deg, #3366ff, #00ccff);
          }
          
          .phone-icon {
            background: linear-gradient(135deg, #00cc99, #00ffcc);
          }
          
          .office-icon {
            background: linear-gradient(135deg, #ff3366, #ff6633);
          }
          
          .contact-text h3 {
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          
          .contact-text p {
            color: var(--text-medium);
            line-height: 1.6;
          }
          
          .message-section {
            margin-top: 2rem;
          }
          
          .message-section h2 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }
          
          .contact-form {
            background-color: var(--background-medium);
            border-radius: var(--border-radius);
            padding: 2.5rem;
          }
          
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .form-group {
            margin-bottom: 1.5rem;
          }
          
          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
          
          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            background-color: var(--background-light);
            border: 2px solid transparent;
            border-radius: var(--border-radius);
            color: var(--text-light);
            font-size: 1rem;
            transition: all var(--transition-speed) ease;
          }
          
          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(51, 102, 255, 0.1);
          }
          
          .form-group input::placeholder,
          .form-group textarea::placeholder {
            color: var(--text-dark);
          }
          
          .send-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: var(--border-radius);
            font-weight: 500;
            cursor: pointer;
            transition: background-color var(--transition-speed) ease;
          }
          
          .send-button:hover {
            background-color: var(--primary-dark);
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