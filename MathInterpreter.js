import React, { useState } from 'react';

function MathInterpreter({ onClose }) {
  const [problem, setProblem] = useState('');
  const [interpretation, setInterpretation] = useState('');

  const interpretProblem = () => {
    
    setInterpretation(`Interpretação: ${problem}`);
    
  };

  return (
    <div style={styles.container}>
      <h2>Interpretador de Problemas</h2>
      <textarea
        rows="4"
        cols="50"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Digite o problema matemático aqui..."
        style={styles.textarea}
      />
      <button style={styles.button} onClick={interpretProblem}>
        Interpretar
      </button>
      <div style={styles.interpretation}>
        {interpretation}
      </div>
      <button style={styles.closeButton} onClick={onClose}>Fechar</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  },
  interpretation: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default MathInterpreter;
