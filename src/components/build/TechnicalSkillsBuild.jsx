function TechnicalSkillsBuild({ cvData, setCvData }) {
  function handleAdd() {
    const id = crypto.randomUUID();
    const newValue = document.getElementById("technicalSkillsInput").value;
    document.getElementById("technicalSkillsInput").value = '';

    if (newValue !== '') {
      setCvData(prevData => ({
        ...cvData,
        technicalSkills: [
          ...prevData.technicalSkills,
          { id: id, skill: newValue }
        ]
      }));
    }
  }

  function handleDelete(id) {
    setCvData((prevData) => {
      const skills = [...prevData.technicalSkills];
      const updatedSkills = skills.filter(skill => skill.id !== id);

      return {
        ...prevData,
        ['technicalSkills']: updatedSkills
      }
    })
  }

  return (
    <div className="flex flex-col my-2">
      <ul>
        {cvData['technicalSkills'].map(data => (
          <li key={data.id} className="flex justify-between items-center bg-slate-50 p-2 rounded-md text-slate-700 mb-2">
            {data.skill} <button className='deleteItemsButton' onClick={(() => handleDelete(data.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <label className="pb-1 pl-1 text-md font-medium">
        Add skill
      </label>
      <input id="technicalSkillsInput" className="p-1 my-2 rounded-md"
        type="text"
      ></input>
      <button className="addButton" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TechnicalSkillsBuild;