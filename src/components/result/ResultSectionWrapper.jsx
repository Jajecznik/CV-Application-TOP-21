const ResultSectionWrapper = ({ sectionName, children }) => {
  return (
    <section className="sectionContainer">
      <h3 className="sectionName">{sectionName}</h3>
      <div className="sectionContent">{children}</div>
    </section>
  );
};

export default ResultSectionWrapper;
