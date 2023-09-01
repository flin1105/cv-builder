import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { monthOptions, yearOptions } from "../data";
import SelectMenu from "./SelectMenu";

const ExperienceForm = ({ expInfo, setExpInfo }) => {
	const [currentExp, setCurrentExp] = useState({
		id: uuidv4(),
		company: "",
		title: "",
		location: "",
		duties: "",
		startMonth: "",
		startYear: "",
		endMonth: "",
		endYear: "",
	});

	const handleDataChange = (e) => {
		setCurrentExp({ ...currentExp, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setExpInfo(expInfo.concat(currentExp));
		setCurrentExp({
			id: uuidv4(),
			company: "",
			title: "",
			location: "",
			duties: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
		});
	};

	const handleDeleteExperience = (e) => {
		const newExperienceList = expInfo.filter(
			(experience) => experience.id !== e.target.id
		);
		setExpInfo(newExperienceList);
	};

	return (
		<section>
			<h2>Experience Form</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="company">Company Name: </label>
				<input
					type="text"
					id="company"
					name="company"
					value={currentExp.company}
					onChange={handleDataChange}
				></input>
				<label htmlFor="title">Position Title: </label>
				<input
					type="text"
					id="title"
					name="title"
					value={currentExp.title}
					onChange={handleDataChange}
				></input>
				<label htmlFor="location">Location: </label>
				<input
					type="text"
					id="location"
					name="location"
					value={currentExp.location}
					onChange={handleDataChange}
				></input>
				<label htmlFor="duties">Job responsibilities: </label>
				<textarea
					id="duties"
					name="duties"
					rows="4"
					cols="25"
					value={currentExp.duties}
					onChange={handleDataChange}
				></textarea>
				<div>
					<SelectMenu
						id="startMonth"
						name="startMonth"
						text="Start Month"
						dateOptions={monthOptions}
						currentData={currentExp}
						setCurrentData={setCurrentExp}
					>
						<option value="">-Please select starting month-</option>
					</SelectMenu>
					<SelectMenu
						id="startYear"
						name="startYear"
						text="Start Year"
						dateOptions={yearOptions}
						currentData={currentExp}
						setCurrentData={setCurrentExp}
					>
						<option value="">-Please select starting year-</option>
					</SelectMenu>
					<SelectMenu
						id="endMonth"
						name="endMonth"
						text="End Month"
						dateOptions={monthOptions}
						currentData={currentExp}
						setCurrentData={setCurrentExp}
					>
						{<option value="">-Please select ending month-</option>}
					</SelectMenu>
					<SelectMenu
						id="endYear"
						name="endYear"
						text="End Year"
						dateOptions={yearOptions}
						currentData={currentExp}
						setCurrentData={setCurrentExp}
					>
						{<option value="">--Please select ending month--</option>}
					</SelectMenu>
				</div>
				<button type="submit">SAVE EXPERIENCE</button>
			</form>
			<div>
				TESTING Experience Form {currentExp.company} {currentExp.title}
				{currentExp.location} {currentExp.duties}
				<p>
					Start Month :{currentExp.startMonth} Start year :
					{currentExp.startYear}
				</p>
				<p>
					End Month: {currentExp.endMonth} End Year: {currentExp.endYear}
				</p>
			</div>
			<div>
				<h3>Current Experience</h3>
				{expInfo.map((experience) => {
					return (
						<div key={experience.id}>
							<h4>{experience.company}</h4>
							<p>
								{experience.title} {experience.location}
							</p>
							<p>
								Start {experience.startMonth} {experience.startYear}
							</p>
							<p>
								End {experience.endMonth} {experience.endYear}
							</p>
							<button
								id={experience.id}
								onClick={handleDeleteExperience}
							>
								Delete Experience
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

ExperienceForm.propTypes = {
	expInfo: PropTypes.array,
	setExpInfo: PropTypes.func,
};

export default ExperienceForm;
