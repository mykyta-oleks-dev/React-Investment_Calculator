const UserInput = ({ onChange, data }) => {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initial">Initial Investment</label>
					<input
						type="number"
						name="initial"
						id="initial"
						value={data.initialInvestment}
						onChange={(e) =>
							onChange('initialInvestment', e.target.value)
						}
						required
					/>
				</p>
				<p>
					<label htmlFor="annual">Annual Investment</label>
					<input
						type="number"
						name="annual"
						id="annual"
						value={data.annualInvestment}
						onChange={(e) =>
							onChange('annualInvestment', e.target.value)
						}
						required
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expectedReturn">Expected Return</label>
					<input
						type="number"
						name="expectedReturn"
						id="expectedReturn"
						value={data.expectedReturn}
						onChange={(e) =>
							onChange('expectedReturn', e.target.value)
						}
						required
					/>
				</p>
				<p>
					<label htmlFor="duration">Duration</label>
					<input
						type="number"
						name="duration"
						id="duration"
						value={data.duration}
						onChange={(e) => onChange('duration', e.target.value)}
						required
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
