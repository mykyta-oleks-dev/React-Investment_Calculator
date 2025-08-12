import { useState } from 'react';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
	const [data, setData] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleDataChange = (key, value) => {
		if (!(key in data) || value < 0) return;
		setData((data) => ({ ...data, [key]: parseInt(value) }));
	};

	return (
		<main>
			<UserInput onChange={handleDataChange} data={data} />
			<Results data={data} />
		</main>
	);
}

export default App;
