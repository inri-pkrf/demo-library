import React, { useState } from 'react';

export default function PromptGenerator() {
  const [municipality, setMunicipality] = useState('');
  const [population, setPopulation] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [infrastructure, setInfrastructure] = useState([]);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const emergencyTypes = [
    "Natural Disaster - Flood",
    "Natural Disaster - Earthquake",
    "Natural Disaster - Hurricane/Severe Storm",
    "Natural Disaster - Wildfire",
    "Infrastructure - Power Outage",
    "Infrastructure - Water Contamination",
    "Infrastructure - Gas Leak",
    "Security - Cyber Attack",
    "Security - Civil Unrest",
    "Security - Terrorist Threat",
    "Health - Disease Outbreak",
    "Health - Mass Casualty Incident",
    "Transport - Major Traffic Incident",
    "Transport - Hazardous Material Spill"
  ];

  const infrastructureOptions = [
    "Hospital/Medical Centers",
    "Schools/Universities",
    "Government Buildings",
    "Power Plants/Substations",
    "Water Treatment Facilities",
    "Transportation Hubs",
    "Shopping Centers/Malls",
    "Sports Venues/Stadiums",
    "High-Rise Buildings",
    "Industrial Facilities",
    "Bridges/Tunnels",
    "Dams/Reservoirs"
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
      alert("Please fill in all required fields");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const infrastructureString = infrastructure.join(", ");
      const promptTemplate = `Create a detailed emergency simulation scenario for ${municipality} (population: ${population}) involving a ${emergencyType} that affects the following infrastructure: ${infrastructureString}.\n\nInclude:\n- Initial emergency conditions\n- Expected damage assessment\n- Required emergency response resources\n- Evacuation considerations\n- Public communication strategy\n- Interagency coordination needs\n- Timeline of critical response activities`;
      
      setGeneratedPrompt(promptTemplate);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert("Prompt copied to clipboard!");
  };

  return (
    <div className="prompt-generator-page">
      <div className="generator-header">
        <h1>Emergency Prompt Generator</h1>
        <p>Create customized emergency scenario prompts for training, planning, and simulation</p>
      </div>
      
      <div className="generator-container">
        <div className="input-section">
          <h2>Scenario Parameters</h2>
          
          <div className="input-group">
            <label htmlFor="municipality">Municipality Name</label>
            <input
              type="text"
              id="municipality"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
              placeholder="e.g. Riverside City"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="population">Population Size</label>
            <input
              type="text"
              id="population"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              placeholder="e.g. 250,000"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="emergency-type">Emergency Type</label>
            <select
              id="emergency-type"
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
            >
              <option value="">Select Emergency Type</option>
              {emergencyTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="input-group">
            <label>Affected Infrastructure (select all that apply)</label>
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
            {isGenerating ? 'Generating...' : 'Generate Prompt'}
          </button>
        </div>
        
        <div className="output-section">
          <h2>Generated Prompt</h2>
          
          {generatedPrompt ? (
            <>
              <div className="prompt-output">
                <pre>{generatedPrompt}</pre>
              </div>
              <div className="prompt-actions">
                <button className="copy-button" onClick={copyToClipboard}>
                  Copy to Clipboard
                </button>
                <button className="save-button">
                  Save Prompt
                </button>
              </div>
            </>
          ) : (
            <div className="empty-prompt">
              <p>Your generated emergency scenario prompt will appear here.</p>
              <p className="hint">Fill in the parameters on the left and click "Generate Prompt"</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="prompt-tips">
        <h3>Tips for Effective Scenarios</h3>
        <ul>
          <li>Be specific about the scale and scope of the emergency</li>
          <li>Consider cascading effects and secondary emergencies</li>
          <li>Include realistic constraints on resources and response times</li>
          <li>Incorporate communication challenges and information gaps</li>
          <li>Adapt scenarios to your specific geographical and demographic context</li>
        </ul>
      </div>
    </div>
  );
}