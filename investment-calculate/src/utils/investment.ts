import type { TAnnualData } from "@/model/investment.type";
import type { TUserInput } from "@/model/user-input.type";

export function calculateInvestment(input: TUserInput): TAnnualData[] {
  const annualData: TAnnualData[] = [];
  let investmentValue = input.initialInvestment;
  for (let i = 0; i < input.duration; i++) {
    const interestEaredInYear = investmentValue * (input.expectedReturn / 100);
    investmentValue += interestEaredInYear + input.annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEaredInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: input.annualInvestment
    });
  }
  return annualData;
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}