import { useState } from 'react';

function LanguagesBuild({ cvData, setCvData }) {
  const [selectedLevel, setSelectedLevel] = useState("");
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2", "Native"];

  function handleAdd() {
    const id = crypto.randomUUID();
    const newValue = document.getElementById("languagesInput").value;

    if (newValue !== '' && selectedLevel !== '') {
      setCvData(prevData => ({
        ...prevData,
        languages: [
          ...prevData.languages,
          { id: id, language: newValue, level: selectedLevel }
        ]
      }));

      setSelectedLevel("");
      document.getElementById("languagesInput").value = '';
    }
  }

  function handleLevelSelect(level) {
    setSelectedLevel(level);
  }

  function handleDelete(id) {
    setCvData((prevData) => {
      const languages = [...prevData.languages];
      const updatedLanguages = languages.filter(language => language.id !== id);

      return {
        ...prevData,
        ['languages']: updatedLanguages
      }
    });
  }

  return (
    <div className="flex flex-col my-2">
      <ul>
        {cvData['languages'].map(data =>
          <li key={data.id} className="flex justify-between items-center bg-slate-50 p-2 rounded-md text-slate-700 mb-2">
            <span>{data.language} ({data.level})</span>
            <button className='deleteItemsButton' onClick={() => handleDelete(data.id)}>Delete</button>
          </li>
        )}
      </ul>
      <label className="pb-1 pl-1 text-md font-medium">
        Add language
      </label>
      <input id="languagesInput" className="p-1 my-2 rounded-md" type="text" />

      <div className="level-list flex flex-wrap py-2">
        {levels.map(level => (
          <button
            key={level}
            className={`level-button ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => handleLevelSelect(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <button className="addButton" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default LanguagesBuild;
