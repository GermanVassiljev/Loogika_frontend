import React, { useState, useEffect } from 'react';
import EquationGenerator from './EquationGenerator';

/*function newAnswer(newEquationGenerator){

}*/

function Equation({ equation }) {
  let { operator, operandA, operandB, answer} = equation;

  const [loogika, setLoogika] = useState(false);
  //const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if (operator === "and") {
      fetch(`https://localhost:7118/api/ANDloogika/and_operatsioon/${operandA}/${operandB}`)
        .then(res => res.json())
        .then(json => {
          setLoogika(json);
          answer = json;
          //setAnswer(json); // Обновляем answer
        });
    } else if (operator === "or") {
      fetch(`https://localhost:7118/api/ORloogika/or_operatsioon/${operandA}/${operandB}`)
        .then(res => res.json())
        .then(json => {
          setLoogika(json);
          //setAnswer(json); // Обновляем answer
        });
    } else if (operator === "not") {
      fetch(`https://localhost:7118/api/NOTloogika/not_operatsioon/0?bool_1=${operandA}`)
        .then(res => res.json())
        .then(json => {
          setLoogika(json);
          //setAnswer(json); // Обновляем answer
        });
    }
  }, [operator, operandA, operandB, answer]);

  return (
    <div className="equation">
      <div className="equation-text">
        <label>{operandA} {operator} {operandB} = </label>
        <label>{loogika ? "true" : "false"}</label>
      </div>
    </div>
  );
}

export default Equation;
