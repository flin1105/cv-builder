import PropTypes from "prop-types";
import { useState } from "react";
import { monthOptions, yearOptions } from "../data";
import { v4 as uuidv4 } from "uuid";
import SelectMenu from "./SelectMenu";
import EducationList from "./EducationList";

const EducationForm = ({ educationInfo, setEducationInfo }) => {
	const [currentEducation, setCurrentEducation] = useState({
		edID: uuidv4(),
		school: "",
		degree: "",
		fieldOfStudy: "",
		startMonth: "",
		startYear: "",
		endMonth: "",
		endYear: "",
	});

	const handleDataChange = (e) => {
		setCurrentEducation({
			...currentEducation,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setEducationInfo(educationInfo.concat(currentEducation));
		setCurrentEducation({
			edID: uuidv4(),
			school: "",
			degree: "",
			fieldOfStudy: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
		});
	};

	return (
		<section>
			<h2>Education Form</h2>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor="school">School</label>
				<input
					type="text"
					id="school"
					name="school"
					value={currentEducation.school}
					onChange={handleDataChange}
				></input>
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					name="degree"
					value={currentEducation.degree}
					onChange={handleDataChange}
				></input>
				<label htmlFor="fieldOfStudy">Field of Study</label>
				<input
					type="text"
					id="fieldOfStudy"
					name="fieldOfStudy"
					value={currentEducation.fieldOfStudy}
					onChange={handleDataChange}
				></input>
				<div>
					<SelectMenu
						id="startMonth"
						name="startMonth"
						text="Start Month"
						dateOptions={monthOptions}
						currentData={currentEducation}
						setCurrentData={setCurrentEducation}
					>
						<option value="">--Please select starting month--</option>
					</SelectMenu>
					<SelectMenu
						id="startYear"
						name="startYear"
						text="Start Year"
						dateOptions={yearOptions}
						currentData={currentEducation}
						setCurrentData={setCurrentEducation}
					>
						<option value="">--Please select starting year--</option>
					</SelectMenu>
					<SelectMenu
						id="endMonth"
						name="endMonth"
						text="End Month"
						dateOptions={monthOptions}
						currentData={currentEducation}
						setCurrentData={setCurrentEducation}
					>
						<option value="">--Please select ending month--</option>
					</SelectMenu>
					<SelectMenu
						id="endYear"
						name="endYear"
						text="End Year"
						dateOptions={yearOptions}
						currentData={currentEducation}
						setCurrentData={setCurrentEducation}
					>
						<option value="">--Please select ending month--</option>
					</SelectMenu>
				</div>
				<button type="submit">SAVE EDUCATION</button>
			</form>
			<br></br>
			<div>
				TESTING {currentEducation.school} {currentEducation.degree}{" "}
				{currentEducation.fieldOfStudy}
				<p>
					Start Month :{currentEducation.startMonth} Start year:
					{currentEducation.startYear}
				</p>
				<p>
					End Month: {currentEducation.endMonth} End Year:
					{currentEducation.endYear}
				</p>
			</div>
			<EducationList
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
			/>
		</section>
	);
};

EducationForm.propTypes = {
	educationInfo: PropTypes.array,
	setEducationInfo: PropTypes.func,
};

export default EducationForm;
