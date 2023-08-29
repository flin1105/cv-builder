import PropTypes from "prop-types";

const GeneralForm = ({ generalInfo, onHandleGeneralChange }) => {
	const handleChange = (e) => {
		onHandleGeneralChange({ ...generalInfo, [e.target.name]: e.target.value });
	};

	return (
		<section>
			<h2>General Form</h2>
			<form>
				<label htmlFor="fullName">Full Name:</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					onChange={handleChange}
				></input>
				<label htmlFor="email">Email Address:</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={handleChange}
				></input>
				<label htmlFor="phone">Phone Number:</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					onChange={handleChange}
				></input>
			</form>
		</section>
	);
};

GeneralForm.propTypes = {
	generalInfo: PropTypes.object,
	onHandleGeneralChange: PropTypes.func,
};

export default GeneralForm;
