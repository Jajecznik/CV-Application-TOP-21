function UserMultipleInput({ label, type, category, id, subCategory, cvData, setCvData }) {
  function handleChange(e) {
    const newValue = e.target.value;

    setCvData(prevData => ({
      ...cvData,
      [category]: {
        ...prevData[category],
        [id]: {
          ...prevData[category]?.[id],
          [subCategory]: newValue
        }
      }
    }));
  }

  return (
    <div className="flex flex-col my-2">
      <label className="pb-1 pl-1 text-md font-medium">
        {label}
      </label>
      {type === 'textarea' ?
        <textarea
          value={cvData[category]?.[id]?.[subCategory] || ''}
          onChange={handleChange}
          rows="5"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        :
        <input className="p-1 rounded-md"
          type={type}
          value={cvData[category]?.[id]?.[subCategory] || ''}
          onChange={handleChange}
        />}
    </div>
  );
}

export default UserMultipleInput;