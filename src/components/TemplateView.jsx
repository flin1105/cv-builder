import PropTypes from "prop-types";

export const TemplateView = ({ generalInfo, educationInfo, expInfo }) => {
	const { fullName, email, phone } = generalInfo;

	return (
		<>
			<section>
				<h3>General Information Section</h3>
				<p>My name is {fullName}</p>
				<p>My email is {email}</p>
				<p>My phone number is {phone}</p>
			</section>
			<hr />
			<section>
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
			</section>
			<hr />
			<section>
				<h3>Experience Section</h3>
				{expInfo.map((experience, index) => {
					const {
						company,
						title,
						location,
						duties,
						startMonth,
						startYear,
						endMonth,
						endYear,
					} = experience;
					return (
						<div key={index}>
							<h3>{company}</h3>
							<p>
								{title} {location}
							</p>
							<p>{duties}</p>
							<p>
								Start {startMonth} {startYear}
							</p>
							<p>
								End {endMonth} {endYear}
							</p>
						</div>
					);
				})}
			</section>
		</>
	);
};

TemplateView.propTypes = {
	generalInfo: PropTypes.object,
	educationInfo: PropTypes.array,
	expInfo: PropTypes.array,
};

export default TemplateView;
