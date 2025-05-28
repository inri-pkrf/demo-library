import React from 'react';
import '../css/AIEngines.css'

export default function AIEngines() {
  const aiEngines = [
    {
      id: 1,
      title: "מחולל תרחישים",
      description: "צרו תרחישי חירום מותאמים אישית בהתבסס על פרופיל הסיכון והתשתיות של הרשות שלכם.",
      icon: "scenario-icon"
    },
    {
      id: 2,
      title: "אופטימיזציית משאבים",
      description: "כלי מבוסס AI שממליץ על הקצאת משאבים מיטבית בתרחישי חירום שונים.",
      icon: "resource-icon"
    },
    {
      id: 3,
      title: "מעריך תגובות",
      description: "מנתח זמני תגובה ותהליכי קבלת החלטות בתרגולים כדי לזהות נקודות לשיפור.",
      icon: "evaluator-icon"
    },
    {
      id: 4,
      title: "מנבא סיכונים",
      description: "מנוע אנליטיקה חזוי שמעריך תרחישי חירום פוטנציאליים על בסיס נתונים היסטוריים ותנאים עכשוויים.",
      icon: "predictor-icon"
    }
  ];

  return (
    <div className="ai-engines-page" dir="rtl">
      <div className="ai-header">
        <h1>מנועי בינה מלאכותית</h1>
        <p>כלים מתקדמים מבוססי AI לשיפור המוכנות והתגובה למצבי חירום</p>
      </div>
      
      <div className="ai-tools-grid">
        {aiEngines.map(engine => (
          <div className="ai-tool-card" key={engine.id}>
            <div className={`tool-icon ${engine.icon}`}></div>
            <h2>{engine.title}</h2>
            <p>{engine.description}</p>
            <button className="tool-button">
              גישה לכלי
            </button>
          </div>
        ))}
      </div>
      
      <div className="ai-info-section">
        <div className="info-card">
          <h2>איך פועלים מנועי ה-AI שלנו?</h2>
          <p>מנועי הבינה המלאכותית שלנו משתמשים באלגוריתמים מתקדמים של למידת מכונה, שאומנו על אלפי תרחישי חירום מהעולם האמיתי. הכלים מנתחים דפוסים, חוזים תוצאות ומבצעים אופטימיזציה של הקצאת משאבים כדי לסייע לרשויות המקומיות להיערך ולהגיב טוב יותר למצבי חירום.</p>
          <p>כל ההמלצות מבוססות על נהלי חירום מוכרים וניתנות להתאמה לצרכים ולמשאבים של הרשות המקומית שלכם.</p>
        </div>
        
        <div className="tech-showcase">
          <div className="tech-visual"></div>
          <div className="tech-specs">
            <h3>מפרט טכני</h3>
            <ul>
              <li>ארכיטקטורת רשת עצבית עם 12 שכבות מתמחות</li>
              <li>אימון על יותר מ-50,000 מקרי תגובה לחירום</li>
              <li>יכולת עיבוד בזמן אמת</li>
              <li>שילוב עם מערכות ניהול חירום סטנדרטיות</li>
              <li>עדכונים שוטפים בהתאם לנתונים ותרחישים חדשים</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
