import PropTypes from "prop-types";
import { useState } from "react";
import { monthOptions, yearOptions } from "../data";
import SelectMenu from "./SelectMenu";

const EducationForm = ({ educationInfo, setEducationInfo }) => {
	const [currentData, setCurrentData] = useState({
		school: "",
		degree: "",
		fieldOfStudy: "",
		startMonth: "",
		startYear: "",
		endMonth: "",
		endYear: "",
	});

	const handleDataChange = (e) => {
		setCurrentData({ ...currentData, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setEducationInfo(educationInfo.concat(currentData));
		setCurrentData({
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
					value={currentData.school}
					onChange={handleDataChange}
				></input>
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					name="degree"
					value={currentData.degree}
					onChange={handleDataChange}
				></input>
				<label htmlFor="fieldOfStudy">Field of Study</label>
				<input
					type="text"
					id="fieldOfStudy"
					name="fieldOfStudy"
					value={currentData.fieldOfStudy}
					onChange={handleDataChange}
				></input>
				{/* <label htmlFor="startMonth">Start Month</label>
				<select
					id="startMonth"
					name="startMonth"
					onChange={handleDataChange}
				>
					{monthOptions.map((month, index) => (
						<option
							key={index}
							value={month}
						>
							{month}
						</option>
					))}
				</select>
				<label htmlFor="startYear">Start Year</label>
				<select
					id="startYear"
					name="startYear"
					onChange={handleDataChange}
				>
					{yearOptions.map((year, index) => (
						<option
							key={index}
							value={year}
						>
							{year}
						</option>
					))}
				</select> */}
				<div>
					<SelectMenu
						id="startMonth"
						name="startMonth"
						text="Start Month"
						dateOptions={monthOptions}
						currentData={currentData}
						setCurrentData={setCurrentData}
					>
						<option value="">--Please select starting month--</option>
					</SelectMenu>
					<SelectMenu
						id="startYear"
						name="startYear"
						text="Start Year"
						dateOptions={yearOptions}
						currentData={currentData}
						setCurrentData={setCurrentData}
					>
						{/* <option value="">--Please select starting year--</option> */}
					</SelectMenu>
					<SelectMenu
						id="endMonth"
						name="endMonth"
						text="End Month"
						dateOptions={monthOptions}
						currentData={currentData}
						setCurrentData={setCurrentData}
					>
						{/* <option value="">--Please select ending month--</option> */}
					</SelectMenu>
					<SelectMenu
						id="endYear"
						name="endYear"
						text="End Year"
						dateOptions={yearOptions}
						currentData={currentData}
						setCurrentData={setCurrentData}
					>
						{/* <option value="">--Please select ending month--</option> */}
					</SelectMenu>
				</div>
				<button type="submit">SAVE EDUCATION</button>
			</form>
			<br></br>
			<div>
				TESTING {currentData.school} {currentData.degree}{" "}
				{currentData.fieldOfStudy}
				<p>
					Start Month :{currentData.startMonth} Start year :{" "}
					{currentData.startYear}
				</p>
				<p>
					End Month: {currentData.endMonth} End Year: {currentData.endYear}
				</p>
			</div>
		</section>
	);
};

EducationForm.propTypes = {
	educationInfo: PropTypes.array,
	setEducationInfo: PropTypes.func,
};

export default EducationForm;
