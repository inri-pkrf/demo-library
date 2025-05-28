import React, { useState } from 'react';
import '../css/PromptGenerator.css'

export default function PromptGenerator() {
  const [municipality, setMunicipality] = useState('');
  const [population, setPopulation] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [infrastructure, setInfrastructure] = useState([]);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const emergencyTypes = [
    "אסון טבע - שיטפון",
    "אסון טבע - רעידת אדמה",
    "אסון טבע - סופה/סערה קשה",
    "אסון טבע - שריפת חורש",
    "תשתיות - הפסקת חשמל",
    "תשתיות - זיהום מים",
    "תשתיות - דליפת גז",
    "ביטחון - מתקפת סייבר",
    "ביטחון - מהומות אזרחיות",
    "ביטחון - איום טרור",
    "בריאות - התפרצות מחלה",
    "בריאות - אירוע רב נפגעים",
    "תחבורה - תאונה קשה",
    "תחבורה - שפך חומרים מסוכנים"
  ];

  const infrastructureOptions = [
    "בתי חולים/מרכזים רפואיים",
    "בתי ספר/אוניברסיטאות",
    "מבני ממשל",
    "תחנות כוח/חוות שנאים",
    "מתקני טיהור מים",
    "מרכזי תחבורה",
    "מרכזי קניות/קניונים",
    "אצטדיונים/אולמות ספורט",
    "בניינים גבוהים",
    "מתקנים תעשייתיים",
    "גשרים/מנהרות",
    "סכרים/מאגרים"
  ];

  const handleInfrastructureToggle = (item) => {
    if (infrastructure.includes(item)) {
      setInfrastructure(infrastructure.filter(i => i !== item));
    } else {
      setInfrastructure([...infrastructure, item]);
    }
  };

  const generatePrompt = () => {
    if (!municipality || !population || !emergencyType || infrastructure.length === 0) {
      alert("נא למלא את כל השדות הדרושים");
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const infrastructureString = infrastructure.join(", ");
      const promptTemplate = `צור תרחיש חירום מפורט עבור ${municipality} (אוכלוסייה: ${population}) הכולל ${emergencyType} המשפיע על התשתיות הבאות: ${infrastructureString}.\n\nיש לכלול:\n- תנאי פתיחה של האירוע\n- הערכת נזקים צפויה\n- משאבים נדרשים לתגובה\n- שיקולי פינוי\n- אסטרטגיית תקשורת עם הציבור\n- תיאום בין גופים\n- ציר זמן לפעולות תגובה קריטיות`;

      setGeneratedPrompt(promptTemplate);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert("הפרומפט הועתק ללוח!");
  };

  return (
    <div className="prompt-generator-page" dir="rtl">
      <div className="generator-header">
        <h1>מחולל פרומפטים לתרחישי חירום</h1>
        <p>יצירת פרומפטים מותאמים אישית לתרגולים, תכנון והדרכה</p>
      </div>

      <div className="generator-container">
        <div className="input-section">
          <h2>פרטי התרחיש</h2>

          <div className="input-group">
            <label htmlFor="municipality">שם רשות מקומית</label>
            <input
              type="text"
              id="municipality"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
              placeholder="לדוגמה: עיר נהריה"
            />
          </div>

          <div className="input-group">
            <label htmlFor="population">גודל אוכלוסייה</label>
            <input
              type="text"
              id="population"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              placeholder="לדוגמה: 250,000"
            />
          </div>

          <div className="input-group">
            <label htmlFor="emergency-type">סוג תרחיש חירום</label>
            <select
              id="emergency-type"
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
            >
              <option value="">בחר סוג חירום</option>
              {emergencyTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>תשתיות מושפעות (סמן את כל הרלוונטיים)</label>
            <div className="checkbox-group">
              {infrastructureOptions.map((item, index) => (
                <div className="checkbox-item" key={index}>
                  <input
                    type="checkbox"
                    id={`infra-${index}`}
                    checked={infrastructure.includes(item)}
                    onChange={() => handleInfrastructureToggle(item)}
                  />
                  <label htmlFor={`infra-${index}`}>{item}</label>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="generate-button"
            onClick={generatePrompt}
            disabled={isGenerating}
          >
            {isGenerating ? 'יוצר פרומפט...' : 'צור פרומפט'}
          </button>
        </div>

        <div className="output-section">
          <h2>הפרומפט שנוצר</h2>

          {generatedPrompt ? (
            <>
              <div className="prompt-output">
                <pre>{generatedPrompt}</pre>
              </div>
              <div className="prompt-actions">
                <button className="copy-button" onClick={copyToClipboard}>
                  העתק ללוח
                </button>
                <button className="save-button">
                  שמור פרומפט
                </button>
              </div>
            </>
          ) : (
            <div className="empty-prompt">
              <p>הפרומפט שייוצר יוצג כאן.</p>
              <p className="hint">מלא את הפרטים בצד שמאל ולחץ על "צור פרומפט"</p>
            </div>
          )}
        </div>
      </div>

      <div className="prompt-tips">
        <h3>טיפים ליצירת תרחישים אפקטיביים</h3>
        <ul>
          <li>ציין את היקף ועוצמת האירוע</li>
          <li>חשוב על השפעות משניות ותגובת שרשרת</li>
          <li>הכנס מגבלות ריאליות של משאבים וזמן תגובה</li>
          <li>שקול אתגרי תקשורת ופערי מידע</li>
          <li>התאם את התרחיש להקשר גיאוגרפי ודמוגרפי מקומי</li>
        </ul>
      </div>
    </div>
  );
}
