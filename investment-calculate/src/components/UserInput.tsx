import type { TUserInput } from "@/model/user-input.type";

type TUserInputProps = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initialInvestment: TUserInput;
}

export default function UserInput({ onChangeInput: handleInputChange, initialInvestment }: TUserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial_investment">Initial Investment</label>
          <input id="initial_investment" name="initialInvestment" type="number" value={initialInvestment.initialInvestment} onChange={handleInputChange} required />
        </p>
        <p>
          <label htmlFor="annual_investment">Annual Investment</label>
          <input id="annual_investment" name="annualInvestment" type="number" value={initialInvestment.annualInvestment} onChange={handleInputChange} required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expected_return">Expected Return</label>
          <input id="expected_return" name="expectedReturn" type="number" value={initialInvestment.expectedReturn} onChange={handleInputChange} required />
        </p>
        <p>
          <label htmlFor="duration_in">Duration</label>
          <input id="duration_in" name="duration" type="number" value={initialInvestment.duration} onChange={handleInputChange} required />
        </p>
      </div>
      <div id="pre-code">
        <h4>Preview Data (Two-way Binding):</h4>
        <pre>
          {JSON.stringify(initialInvestment, null, 2)}
        </pre>
      </div>
    </section>
  )
}