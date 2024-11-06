import { useState } from 'react';
import PanelContent from "./shared/PanelContent";

function JobExperienceBuild({ cvData, setCvData }) {
  function handleAddPanel() {
    const newPanel = {
      id: crypto.randomUUID(),
      panelData: panelData
    };

    setJobPanels((prevPanels) => [
      ...prevPanels,
      newPanel
    ]);
  }

  function removePanel(id) {
    setJobPanels((prevPanels) => prevPanels.filter(panel => panel.id !== id));
  }

  const randomId = crypto.randomUUID();
  const panelData = [
    { label: "Job position", type: "text", category: "jobExperience", subCategory: "jobPosition" },
    { label: "Company", type: "text", category: "jobExperience", subCategory: "company" },
    { label: "From date", type: "date", category: "jobExperience", subCategory: "jobExperienceFromDate" },
    { label: "To date", type: "date", category: "jobExperience", subCategory: "jobExperienceToDate" },
    { label: "Responsibilities", type: "textarea", category: "jobExperience", subCategory: "responsibilities" }
  ];

  const [jobPanels, setJobPanels] = useState([
    {
      id: randomId,
      panelData: panelData
    }
  ]);

  return (
    <>
      <div>
        {jobPanels.map((panel, index) =>
          <div key={panel.id} style={index > 0 ? { marginTop: '32px', paddingTop: '16px', borderTopWidth: '2px', borderTopStyle: 'solid', borderTopColor: 'rgb(148 163 184)' } : {}}>
            <PanelContent
              panelData={panel.panelData}
              cvData={cvData}
              setCvData={setCvData}
              id={panel.id}
              canDelete={index > 0}
              removePanel={removePanel}
            />
          </div>
        )}
      </div>
      <button className="addButton" onClick={handleAddPanel}>Add</button>
    </>
  );
}

export default JobExperienceBuild;
