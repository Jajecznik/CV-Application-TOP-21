function InformationPanelWrapper({ panelName, children }) {
  return (
    <section className='panelContainer'>
      <h3 className='panelName'><b>{panelName}</b></h3>
      <div className='panelContent'>{children}</div>
    </section>
  );
}

export default InformationPanelWrapper;