function LanguagesResult({ languages }) {
  return (
    <>
      {languages.map(data =>
        <p key={data.id}>
          {data.language} - <b>{data.level}</b>
        </p>
      )}
    </>
  );
}

export default LanguagesResult;