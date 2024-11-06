import { useState } from 'react';
import PanelContent from "./shared/PanelContent";

function EducationBuild({ cvData, setCvData }) {
  function handleAddPanel() {
    const newPanel = {
      id: crypto.randomUUID(),
      panelData: panelData
    };

    setEducationPanels((prevPanels) => [
      ...prevPanels,
      newPanel
    ]);
  }

  function removePanel(id) {
    setJobPanels((prevPanels) => prevPanels.filter(panel => panel.id !== id));
  }

  const randomId = crypto.randomUUID();
  const panelData = [
    { label: "Field of study", type: "text", category: "education", subCategory: "fieldOfStudy" },
    { label: "Institution", type: "text", category: "education", subCategory: "institution" },
    { label: "From date", type: "date", category: "education", subCategory: "educationFromDate" },
    { label: "To date", type: "date", category: "education", subCategory: "educationToDate" },
  ];
  const [educationPanels, setEducationPanels] = useState([
    {
      id: randomId,
      panelData: panelData
    }
  ]);

  return (
    <>
      <div>
        {educationPanels.map((panel, index) =>
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

export default EducationBuild;