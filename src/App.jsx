import { useState } from "react";
import TemplateView from "./components/TemplateView";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";

function App() {
	const [generalInfo, SetGeneralInfo] = useState({
		fullName: "John/Jane Doe",
		email: "frank@email.com",
		phone: "123-4567",
	});

	const [educationInfo, setEducationInfo] = useState([]);

	return (
		<>
			<h1>My Resume Builder</h1>
			<GeneralForm
				generalInfo={generalInfo}
				onHandleGeneralChange={SetGeneralInfo}
			/>
			<EducationForm
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
			/>
			<TemplateView
				generalInfo={generalInfo}
				educationInfo={educationInfo}
			/>
		</>
	);
}

export default App;
