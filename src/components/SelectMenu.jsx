import PropTypes from "prop-types";

const SelectMenu = ({
	id,
	name,
	text,
	dateOptions,
	currentData,
	setCurrentData,
	children,
}) => {
	const handleOnChange = (e) => {
		setCurrentData({ ...currentData, [e.target.name]: e.target.value });
	};

	return (
		<>
			<label htmlFor={name}>{text}</label>
			<select
				id={id}
				name={name}
				onChange={handleOnChange}
				value={currentData[name]}
			>
				{children}
				{dateOptions.map((date, index) => (
					<option
						key={index}
						value={date}
					>
						{date}
					</option>
				))}
			</select>
		</>
	);
};

SelectMenu.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	text: PropTypes.string,
	dateOptions: PropTypes.array,
	currentData: PropTypes.object,
	setCurrentData: PropTypes.func,
};

export default SelectMenu;
