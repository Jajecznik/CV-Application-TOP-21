import '../../styles/ResultSection.css';
import { defaultStrings } from "../../utils/data";
import ResultSectionWrapper from "./ResultSectionWrapper";
import PersonalInformationResult from "./PersonalInformationResult";
import ContactInfoResult from "./ContactInfoResult";
import JobExperienceResult from "./JobExperienceResult";
import EducationResult from "./EducationResult";
import TechnicalSkillsResult from "./TechnicalSkillsResult";
import LanguagesResult from "./LanguagesResult";

function CvResult({ cvData }) {
	return (
		<div className="w-full md:w-3/5 md:h-screen overflow-y-auto rounded-tl-md bg-slate-50">
			<header className="p-4 rounded-t-md bg-slate-100">
				<h2 className="text-3xl font-bold">
					{cvData['personalInformation'].firstName || defaultStrings.firstName} {cvData['personalInformation'].lastName || defaultStrings.lastName}
				</h2>
				<p className="pt-2">
					{cvData['summary'] || defaultStrings.summary}
				</p>
			</header>

			<div className="p-4">
				<ResultSectionWrapper sectionName="Personal information">
					<PersonalInformationResult
						firstName={cvData['personalInformation'].firstName}
						lastName={cvData['personalInformation'].lastName}
						dateOfBirth={cvData['personalInformation'].dateOfBirth}
					/>
				</ResultSectionWrapper>

				<ResultSectionWrapper sectionName="Contact info">
					<ContactInfoResult
						email={cvData['contactInfo'].email}
						phoneNumber={cvData['contactInfo'].phoneNumber}
					/>
				</ResultSectionWrapper>

				<ResultSectionWrapper sectionName="Job experience">
					<JobExperienceResult
						jobExperienceData={cvData['jobExperience']}
					/>
				</ResultSectionWrapper>

				<ResultSectionWrapper sectionName="Education">
					<EducationResult
						educationData={cvData['education']}
					/>
				</ResultSectionWrapper>

				<ResultSectionWrapper sectionName="Technical skills">
					<TechnicalSkillsResult
						technicalSkills={cvData['technicalSkills']} />
				</ResultSectionWrapper>

				<ResultSectionWrapper sectionName="Languages">
					<LanguagesResult
						languages={cvData['languages']}
					/>
				</ResultSectionWrapper>
			</div>
		</div>
	);
}

export default CvResult;
