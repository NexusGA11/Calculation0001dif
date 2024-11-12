import React, { useState } from 'react';

function Solution({ input, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  const generateExplanatorySteps = (expression) => {
    const steps = [];
    const operations = expression.split(/(\+|-|\*|\/)/).filter(Boolean);
    let currentResult = parseFloat(operations[0]);

    steps.push({
      step: `Inicialize com o primeiro número: ${operations[0]}`,
      display: [operations[0]],
      explanation: "O cálculo começa com o primeiro número na expressão.",
      tip: "Observe o primeiro valor como o ponto de partida."
    });

    for (let i = 1; i < operations.length; i += 2) {
      const operator = operations[i];
      const nextNumber = parseFloat(operations[i + 1]);
      let explanation = "";
      let resultBefore = currentResult;

      switch (operator) {
        case '+':
          currentResult += nextNumber;
          explanation = `Somamos ${nextNumber} ao resultado atual (${resultBefore}).`;
          break;
        case '-':
          currentResult -= nextNumber;
          explanation = `Subtraímos ${nextNumber} do resultado atual (${resultBefore}).`;
          break;
        case '*':
          currentResult *= nextNumber;
          explanation = `Multiplicamos o resultado atual (${resultBefore}) por ${nextNumber}.`;
          break;
        case '/':
          currentResult /= nextNumber;
          explanation = `Dividimos o resultado atual (${resultBefore}) por ${nextNumber}.`;
          break;
        default:
          break;
      }

      steps.push({
        step: `Aplique ${operator} ${nextNumber}`,
        display: [...steps[steps.length - 1].display, operator, nextNumber],
        explanation,
        tip: `Ao ver o operador "${operator}", entenda-o como ${operator === '+' ? 'adição' : operator === '-' ? 'subtração' : operator === '*' ? 'multiplicação' : 'divisão'}.`
      });
    }

    steps.push({
      step: `Resultado final: ${currentResult}`,
      display: [currentResult],
      explanation: "Este é o resultado final após todas as operações.",
      tip: "Revise cada passo para entender como chegamos aqui."
    });

    return steps;
  };

  const steps = generateExplanatorySteps(input);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Solução Explicativa para: {input}</h2>
      <div style={styles.steps}>
        <div style={styles.calculation}>
          {steps[currentStep].display.map((item, index) => (
            <span key={index} style={styles.calculationStep}>{item}</span>
          ))}
        </div>
        <div style={styles.explanationContainer}>
          <div style={styles.step}>{steps[currentStep].step}</div>
          <div style={styles.explanation}><strong>Explicação:</strong> {steps[currentStep].explanation}</div>
          <div style={styles.tip}><strong>Dica:</strong> {steps[currentStep].tip}</div>
        </div>
      </div>
      <button style={styles.nextButton} onClick={handleNextStep} disabled={currentStep >= steps.length - 1}>
        {currentStep < steps.length - 1 ? 'Avançar Passo' : 'Concluído'}
      </button>
      <button style={styles.closeButton} onClick={onClose}>Fechar</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#121212', // Fundo escuro
    color: '#fff', // Texto branco
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#ffffff',
  },
  steps: {
    margin: '10px 0',
    width: '100%',
  },
  calculation: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '22px',
    marginBottom: '15px',
  },
  calculationStep: {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#1f1f1f', 
    borderRadius: '5px',
    boxShadow: '0 1px 5px rgba(255, 255, 255, 0.1)',
  },
  explanationContainer: {
    backgroundColor: '#1f1f1f',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0 1px 5px rgba(255, 255, 255, 0.1)',
  },
  step: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  explanation: {
    fontSize: '16px',
    marginTop: '5px',
    color: '#90caf9', 
  },
  tip: {
    fontSize: '16px',
    marginTop: '5px',
    color: '#ffab40', 
    fontStyle: 'italic',
  },
  nextButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#1976d2', 
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#d32f2f', 
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Solution;
