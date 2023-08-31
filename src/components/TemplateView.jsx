import PropTypes from "prop-types";

export const TemplateView = ({ generalInfo, educationInfo }) => {
	const { fullName, email, phone } = generalInfo;

	return (
		<div>
			<div>
				<h3>General Information Section</h3>
				<p>My name is {fullName}</p>
				<p>My email is {email}</p>
				<p>My phone number is {phone}</p>
			</div>
			<div>
				<h3>Education Information Section</h3>
				{educationInfo.map((education, index) => {
					const {
						school,
						degree,
						fieldOfStudy,
						startMonth,
						startYear,
						endMonth,
						endYear,
					} = education;

					return (
						<div key={index}>
							<p>
								I went to {school} for a {degree}
								{fieldOfStudy}
							</p>
							<p>
								Started {startMonth} {startYear}
							</p>
							<p>
								Ended {endMonth} {endYear}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

TemplateView.propTypes = {
	generalInfo: PropTypes.object,
	educationInfo: PropTypes.array,
};

export default TemplateView;
