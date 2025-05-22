import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';


export default function Simulation() {
  const urlParams = new URLSearchParams(window.location.search);
  const simulationId = parseInt(urlParams.get('id') || '1');
  const [simulation, setSimulation] = useState(null);
  const [relatedSimulations, setRelatedSimulations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulations data (in a real app, this would come from an entity)
  const simulationsData = [
    {
      id: 1,
      title: "Flood Emergency Response",
      description: "A comprehensive simulation of emergency response procedures during a major flood event. This scenario covers evacuation protocols, resource allocation, and coordination between multiple emergency response teams.",
      videoUrl: "https://www.youtube.com/embed/6wtebrAxrbM",
      thumbnail: "https://images.unsplash.com/photo-1596823412285-8fec816edb75?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["flood", "natural disaster"],
        damage: ["property", "infrastructure"],
        screenSize: ["large"]
      }
    },
    {
      id: 2,
      title: "Earthquake Building Evacuation",
      description: "Simulation of a complete building evacuation during a major earthquake, featuring structural damage assessment and triage procedures for a high-occupancy municipal building.",
      videoUrl: "https://www.youtube.com/embed/iWP5OBy6hGA",
      thumbnail: "https://images.unsplash.com/photo-1588852656350-d2b5048e6be3?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["earthquake", "evacuation"],
        damage: ["structural", "collapse"],
        screenSize: ["medium", "large"]
      }
    },
    {
      id: 3,
      title: "Fire Response Protocol",
      description: "Step-by-step simulation of municipal fire department response to a commercial building fire, including resource deployment, containment strategies, and evacuation coordination.",
      videoUrl: "https://www.youtube.com/embed/qPpOXH0ADSg",
      thumbnail: "https://images.unsplash.com/photo-1628172930073-8f46a3a8bf20?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["fire", "hazardous"],
        damage: ["fire", "smoke"],
        screenSize: ["small", "medium"]
      }
    },
    {
      id: 4,
      title: "Chemical Spill Containment",
      description: "Detailed simulation of hazardous materials response team handling a major chemical spill near a water treatment facility, featuring containment procedures and public safety measures.",
      videoUrl: "https://www.youtube.com/embed/8zEBL8iPZqg",
      thumbnail: "https://images.unsplash.com/photo-1635777539573-1deba7b0b025?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["chemical", "hazardous"],
        damage: ["environmental", "health"],
        screenSize: ["large"]
      }
    },
    {
      id: 5,
      title: "Active Shooter Response",
      description: "Emergency response simulation for law enforcement and municipal staff during an active shooter situation in a public building, with emphasis on coordination and civilian protection protocols.",
      videoUrl: "https://www.youtube.com/embed/7HRh0vmYXF8",
      thumbnail: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["security", "violence"],
        damage: ["personal injury"],
        screenSize: ["small", "medium", "large"]
      }
    },
    {
      id: 6,
      title: "Hurricane Evacuation Plan",
      description: "Complete simulation of municipal hurricane response, including early warning systems, evacuation route management, and emergency shelter establishment procedures.",
      videoUrl: "https://www.youtube.com/embed/LbkQTBw5ALc",
      thumbnail: "https://images.unsplash.com/photo-1571941096025-8c8ed5032f66?q=80&w=800&auto=format&fit=crop",
      tags: {
        emergency: ["hurricane", "natural disaster"],
        damage: ["wind", "flooding", "infrastructure"],
        screenSize: ["large"]
      }
    }
  ];

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    
    setTimeout(() => {
      const currentSimulation = simulationsData.find(sim => sim.id === simulationId) || simulationsData[0];
      setSimulation(currentSimulation);
      
      // Find related simulations based on tags
      if (currentSimulation) {
        const related = simulationsData
          .filter(sim => sim.id !== currentSimulation.id)
          .filter(sim => {
            // Check for tag overlaps
            const emergencyOverlap = sim.tags.emergency.some(tag => 
              currentSimulation.tags.emergency.includes(tag)
            );
            const damageOverlap = sim.tags.damage.some(tag => 
              currentSimulation.tags.damage.includes(tag)
            );
            return emergencyOverlap || damageOverlap;
          })
          .slice(0, 3); // Get up to 3 related simulations
          
        setRelatedSimulations(related);
      }
      
      setLoading(false);
    }, 800);
  }, [simulationId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading simulation...</p>
      </div>
    );
  }

  if (!simulation) {
    return (
      <div className="not-found-container">
        <h1>Simulation Not Found</h1>
        <p>The requested simulation could not be found.</p>
        <Link to={createPageUrl('Search')} className="back-button">
          Return to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="simulation-page">
      <Link to={createPageUrl('Search')} className="back-button">
        ← Back to Search
      </Link>
      
      <div className="simulation-header">
        <h1>{simulation.title}</h1>
        <div className="tag-container">
          {simulation.tags.emergency.map(tag => (
            <span className="tag emergency-tag" key={`emergency-${tag}`}>{tag}</span>
          ))}
          {simulation.tags.damage.map(tag => (
            <span className="tag damage-tag" key={`damage-${tag}`}>{tag}</span>
          ))}
          {simulation.tags.screenSize.map(tag => (
            <span className="tag screen-tag" key={`screen-${tag}`}>{tag} screen</span>
          ))}
        </div>
      </div>
      
      <div className="simulation-content">
        <div className="video-container">
          <iframe 
            src={simulation.videoUrl} 
            title={simulation.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="simulation-details">
          <h2>Simulation Details</h2>
          <p>{simulation.description}</p>
          
          <div className="simulation-actions">
            <button className="action-button download-button">
              Download Simulation
            </button>
            <button className="action-button share-button">
              Share Simulation
            </button>
          </div>
        </div>
      </div>
      
      {relatedSimulations.length > 0 && (
        <div className="related-simulations">
          <h2>Related Simulations</h2>
          <div className="related-grid">
            {relatedSimulations.map(sim => (
              <Link to={createPageUrl(`Simulation?id=${sim.id}`)} className="related-card" key={sim.id}>
                <div className="related-thumbnail">
                  <img src={sim.thumbnail} alt={sim.title} />
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