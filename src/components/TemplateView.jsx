import PropTypes from "prop-types";

export const TemplateView = ({ generalInfo }) => {
	const { fullName, email, phone } = generalInfo;
	return (
		<div>
			<p>My name is {fullName}</p>
			<p>My email is {email}</p>
			<p>My phone number is {phone}</p>
		</div>
	);
};

TemplateView.propTypes = {
	generalInfo: PropTypes.object,
};

export default TemplateView;
