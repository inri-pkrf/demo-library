import React from 'react';

export default function AIEngines() {
  const aiEngines = [
    {
      id: 1,
      title: "Scenario Generator",
      description: "Create custom emergency scenarios based on your municipality's specific risk profile and infrastructure.",
      icon: "scenario-icon"
    },
    {
      id: 2,
      title: "Resource Optimizer",
      description: "AI-powered tool that recommends optimal resource allocation during various emergency scenarios.",
      icon: "resource-icon"
    },
    {
      id: 3,
      title: "Response Evaluator",
      description: "Analyze response times and decision-making during simulations to identify areas for improvement.",
      icon: "evaluator-icon"
    },
    {
      id: 4,
      title: "Risk Predictor",
      description: "Predictive analytics engine that forecasts potential emergencies based on historical data and current conditions.",
      icon: "predictor-icon"
    }
  ];

  return (
    <div className="ai-engines-page">
      <div className="ai-header">
        <h1>AI Engines</h1>
        <p>Advanced artificial intelligence tools to enhance emergency preparedness and response</p>
      </div>
      
      <div className="ai-tools-grid">
        {aiEngines.map(engine => (
          <div className="ai-tool-card" key={engine.id}>
            <div className={`tool-icon ${engine.icon}`}></div>
            <h2>{engine.title}</h2>
            <p>{engine.description}</p>
            <button className="tool-button">
              Access Tool
            </button>
          </div>
        ))}
      </div>
      
      <div className="ai-info-section">
        <div className="info-card">
          <h2>How Our AI Engines Work</h2>
          <p>Our AI engines utilize advanced machine learning algorithms trained on thousands of real-world emergency scenarios. These tools analyze patterns, predict outcomes, and optimize resource allocation to help municipalities prepare for and respond to emergencies more effectively.</p>
          <p>All AI recommendations are based on established emergency management protocols and can be customized to your specific municipality's requirements and resources.</p>
        </div>
        
        <div className="tech-showcase">
          <div className="tech-visual"></div>
          <div className="tech-specs">
            <h3>Technical Specifications</h3>
            <ul>
              <li>Neural network architecture with 12 specialized layers</li>
              <li>Trained on 50,000+ historical emergency response cases</li>
              <li>Real-time processing capabilities</li>
              <li>Integrates with standard emergency management systems</li>
              <li>Regular updates based on new data and scenarios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}