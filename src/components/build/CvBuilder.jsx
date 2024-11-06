import '../../styles/BuildSection.css';
import InformationPanelWrapper from "./shared/InformationPanelWrapper";
import SummaryBuild from "./SummaryBuild";
import PersonalInformationBuild from "./PersonalInformationBuild";
import ContactInfoBuild from "./ContactInfoBuild";
import JobExperienceBuild from "./JobExperienceBuild";
import EducationBuild from "./EducationBuild";
import TechnicalSkillsBuild from "./TechnicalSkillsBuild";
import LanguagesBuild from "./LanguagesBuild";

function CvBuilder({ cvData, setCvData }) {

  return (
    <section className="w-full md:w-2/5 md:h-screen overflow-y-auto px-4 rounded-tr-md bg-slate-50" style={{ direction: 'rtl' }} >
      <div style={{ direction: 'ltr' }}>
        <h2 className="mt-4 text-3xl font-bold">
          Information about you
        </h2>

        <InformationPanelWrapper
          panelName="Summary">
          <SummaryBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Personal Information">
          <PersonalInformationBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Contact info">
          <ContactInfoBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Job experience">
          <JobExperienceBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Education">
          <EducationBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Technical skills">
          <TechnicalSkillsBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>

        <InformationPanelWrapper
          panelName="Languages">
          <LanguagesBuild
            cvData={cvData}
            setCvData={setCvData}
          />
        </InformationPanelWrapper>
      </div>
    </section >
  );
}

export default CvBuilder;
