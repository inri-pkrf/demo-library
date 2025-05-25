import React from 'react';
import '../css/Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Information</h1>
        <p>Get in touch with the creator of the Emergency Simulation Library</p>
      </div>
      
      <div className="contact-card">
        <div className="creator-info">
          <div className="creator-avatar"></div>
          <div className="creator-details">
            <h2>David Johnson</h2>
            <p className="creator-title">Emergency Management Specialist & Platform Developer</p>
            <p className="creator-bio">
              With over 15 years of experience in municipal emergency management and software development, 
              David created this platform to help local authorities better prepare for emergency situations 
              through realistic simulations and AI-assisted planning tools.
            </p>
          </div>
        </div>
        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon email-icon"></div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>david.johnson@emergencysim.org</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon phone-icon"></div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon office-icon"></div>
            <div className="contact-text">
              <h3>Office</h3>
              <p>Emergency Management Innovation Center<br />1234 Preparedness Blvd, Suite 500<br />Riverside, CA 92501</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="message-section">
        <h2>Send a Message</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="What is this regarding?" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>
          </div>
          
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}