import PropTypes from "prop-types";

const EducationForm = () => {
	return (
		<section>
			<h2>Education Form</h2>
			<form>
				<label htmlFor="school">School</label>
				<input
					type="text"
					id="school"
					name="school"
				></input>
				<label htmlFor="degree">Degree</label>
				<input
					type="text"
					id="degree"
					name="degree"
				></input>
				<label htmlFor="phone">Field of Study</label>
				<input
					type="text"
					id="fieldOfStudy"
					name="fieldOfStudy"
				></input>
			</form>
		</section>
	);
};

export default EducationForm;
