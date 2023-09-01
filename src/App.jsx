import { useState } from "react";
import TemplateView from "./components/TemplateView";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

function App() {
	const [generalInfo, SetGeneralInfo] = useState({
		fullName: "John/Jane Doe",
		email: "frank@email.com",
		phone: "123-4567",
	});

	const [educationInfo, setEducationInfo] = useState([]);

	const [expInfo, setExpInfo] = useState([]);

	return (
		<>
			<h1>My Resume Builder</h1>
			<div className="main-display">
				<div className="side-display">
					<GeneralForm
						generalInfo={generalInfo}
						onHandleGeneralChange={SetGeneralInfo}
					/>
					<EducationForm
						educationInfo={educationInfo}
						setEducationInfo={setEducationInfo}
					/>
					<ExperienceForm
						expInfo={expInfo}
						setExpInfo={setExpInfo}
					/>
				</div>
				<div className="side-display">
					<TemplateView
						generalInfo={generalInfo}
						educationInfo={educationInfo}
						expInfo={expInfo}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
