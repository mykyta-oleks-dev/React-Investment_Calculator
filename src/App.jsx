import { useState } from 'react';
import UserInput from './components/UserInput';

function App() {
	const [data, setData] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleDataChange = (key, value) => {
		if (!(key in data) || value < 0) return;
		setData((data) => ({ ...data, [key]: value }));
	};

	return (
		<main>
			<UserInput onChange={handleDataChange} data={data} />
		</main>
	);
}

export default App;
