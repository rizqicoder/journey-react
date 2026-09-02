import Header from '@/components/Header';
import UserInput from './components/UserInput';
import { useState } from 'react';
import type { TUserInput } from './model/user-input.type';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState<TUserInput>({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: Number(value)
    }));
  }
  const inputIsValid =
    (userInput.initialInvestment > 0 &&
      userInput.annualInvestment > 0 &&
      userInput.expectedReturn > 0 &&
      userInput.duration > 0);
  return (
    <main>
      <Header />
      <UserInput onChangeInput={handleInputChange} initialInvestment={userInput} />
      {!inputIsValid && <p className="center">Invalid input. Please enter positive values.</p>}
      {inputIsValid && <Results input={userInput} />}
    </main>
  )
}

export default App
