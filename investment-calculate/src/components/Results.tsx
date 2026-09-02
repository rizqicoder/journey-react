import type { TUserInput } from "@/model/user-input.type"
import { calculateInvestment, formatCurrency } from "@/utils/investment"

type TResultsProps = {
  input: TUserInput
}


function TableRow({ yearData, investment }: { yearData: ReturnType<typeof calculateInvestment>[number], investment: number }) {
  const totalInterestValue =
    yearData.valueEndOfYear -
    yearData.annualInvestment *
    yearData.year - investment;

  const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue;

  return (
    <tr>
      <td>{yearData.year}</td>
      <td>{formatCurrency(yearData.valueEndOfYear)}</td>
      <td>{formatCurrency(yearData.interest)}</td>
      <td>{formatCurrency(totalInterestValue)}</td>
      <td>{formatCurrency(totalAmountInvested)}</td>
    </tr>
  )
}

export default function Results({ input }: TResultsProps) {
  const resultData = calculateInvestment(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => (
          <TableRow key={yearData.year} yearData={yearData} investment={initialInvestment} />
        ))}
      </tbody>
    </table>
  )
}