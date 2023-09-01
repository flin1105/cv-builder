import PropTypes from "prop-types";
import { useState } from "react";

const EducationList = ({ educationInfo, setEducationInfo }) => {
	const [isHidden, setIsHidden] = useState(true);

	const handleHideClick = () => setIsHidden(!isHidden);

	const handleDeleteEducation = (e) => {
		e.preventDefault();
		const newEducation = educationInfo.filter(
			(education) => education.edID !== e.target.id
		);
		setEducationInfo(newEducation);
	};

	return (
		<section>
			<h3>Education</h3>
			{isHidden ? (
				<div>
					Currently Hidding<button onClick={handleHideClick}>Reveal</button>
				</div>
			) : (
				<div>
					{educationInfo.map((education) => {
						return (
							<div key={education.edID}>
								<h4>{education.school}</h4>
								<p>
									{education.degree} {education.fieldOfStudy}
								</p>
								<p>
									{education.startMonth} {education.startYear} -{" "}
									{education.endMonth} {education.endYear}
								</p>
								<button
									id={education.edID}
									onClick={handleDeleteEducation}
								>
									Delete Education
								</button>
								<button onClick={handleHideClick}>Hide Education</button>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};

EducationList.propTypes = {
	educationInfo: PropTypes.array,
	setEducationInfo: PropTypes.func,
};

export default EducationList;
