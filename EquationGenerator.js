
import React, { useState } from 'react';
import Equation from './Equation';

function EquationGenerator() {
  const [equation, setEquation] = useState('');
  const [operator, setOperator] = useState('and');
  const [operandA, setOperandA] = useState(false);
  const [operandB, setOperandB] = useState(false);

  function handleGenerateClick() {
    setEquation(<Equation operator={operator} operandA={operandA ? "true":"false"} operandB={operandB ? "true":"false"} />);
  }

  return (
    <div className="equation-generator">
      {equation}
      <h3>Создание уравнения:</h3>
      <div>
        <label>
          Operand A:
          <input type="checkbox" checked={operandA} onChange={() => setOperandA(!operandA)} />
          
        </label>
      </div>
      <div>
        <label>
          Operator:
          <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="and">AND</option>
            <option value="or">OR</option>
            <option value="not">NOT</option>
          </select>
        </label>
      </div>
      {operator != "not" && (
        <div>
            <label>
            Operand B:
            <input type="checkbox" checked={operandB} onChange={() => setOperandB(!operandB)} />
            </label>
        </div>
      )}
      
      <div>
        <button onClick={handleGenerateClick}>Сгенерировать уравнение</button>
      </div>
    </div>
    
  );
}

export default EquationGenerator;