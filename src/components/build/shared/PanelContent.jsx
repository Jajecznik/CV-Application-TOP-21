import UserMultipleInput from "./UserMultipleInput";
import UserInput from "./UserInput";

function PanelContent({ panelData, cvData, setCvData, id, canDelete, removePanel }) {
  function handleDelete() {
    const category = panelData[0].category;

    setCvData((prevData) => {
      const updatedJobExperience = { ...prevData[category] };
      delete updatedJobExperience[id];

      return {
        ...prevData,
        [category]: updatedJobExperience
      }
    });

    removePanel(id);
  }

  return (
    <section>
      {id ?
        panelData.map((data, index) =>
          <UserMultipleInput
            key={index}
            label={data.label}
            type={data.type}
            category={data.category}
            id={id}
            subCategory={data.subCategory}
            cvData={cvData}
            setCvData={setCvData}
          />
        ) :
        panelData.map((data, index) =>
          <UserInput
            key={index}
            label={data.label}
            type={data.type}
            category={data.category}
            subCategory={data.subCategory}
            id={id}
            cvData={cvData}
            setCvData={setCvData}
          />
        )
      }
      {canDelete && <button className="deleteButton" onClick={handleDelete}>Delete section</button>}
    </section>
  );
}

export default PanelContent;
