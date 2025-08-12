import { formatter, calculateInvestmentResults } from '../util/investment';

const Results = ({ data }) => {
	const investmentResults = calculateInvestmentResults(data);

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentResults.map((res) => {
					const totalInterest =
						res.valueEndOfYear -
						res.annualInvestment * res.year -
						data.initialInvestment;
					return (
						<tr key={res.year}>
							<td>{res.year}</td>
							<td>{formatter.format(res.valueEndOfYear)}</td>
							<td>{formatter.format(res.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>
								{formatter.format(
									res.annualInvestment * res.year
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
