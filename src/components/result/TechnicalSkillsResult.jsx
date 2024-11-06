function TechnicalSkills({ technicalSkills }) {
  return (
    <>
      {technicalSkills.map(data =>
        <p key={data.id}>
          {data.skill}
        </p>
      )}
    </>
  );
}

export default TechnicalSkills;