import React from 'react';
import '../css/Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>יצירת קשר</h1>
        <p>צרו קשר עם יוצר ספריית סימולציות החירום</p>
      </div>
      
      <div className="contact-card">
        <div className="creator-info">
          <div className="creator-avatar"></div>
          <div className="creator-details">
            <h2> המכללה לאיתנות ישראלית</h2>
            <p className="creator-title">מומחה לניהול חירום ומפתח הפלטפורמה</p>
            <p className="creator-bio">
              עם ניסיון של מעל 15 שנים בניהול חירום מוניציפלי ופיתוח תוכנה, דוד יצר את הפלטפורמה הזו כדי לסייע לרשויות המקומיות להיערך טוב יותר למצבי חירום בעזרת סימולציות מציאותיות וכלי תכנון מבוססי בינה מלאכותית.
            </p>
          </div>
        </div>
        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon email-icon"></div>
            <div className="contact-text">
              <h3>אימייל</h3>
              <p>david.johnson@emergencysim.org</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon phone-icon"></div>
            <div className="contact-text">
              <h3>טלפון</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon office-icon"></div>
            <div className="contact-text">
              <h3>משרד</h3>
              <p>
                מרכז החדשנות לניהול חירום<br />
                שד' המוכנות 1234, קומה 5<br />
                ריברסייד, קליפורניה 92501
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="message-section">
        <h2>שליחת הודעה</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">שם</label>
              <input type="text" id="name" placeholder="הכנס/י את שמך" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">אימייל</label>
              <input type="email" id="email" placeholder="הכנס/י כתובת אימייל" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">נושא</label>
            <input type="text" id="subject" placeholder="על מה ההודעה?" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">הודעה</label>
            <textarea id="message" rows="5" placeholder="כתוב/י את ההודעה שלך כאן"></textarea>
          </div>
          
          <button type="submit" className="send-button">שלח/י הודעה</button>
        </form>
      </div>
    </div>
  );
}
