import React, { useState } from 'react';
import Solution from './Solution';
import MathInterpreter from './MathInterpreter';
import UnitConverter from './UnitConverter'; // Adicionando a importação do componente de conversão

function App() {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [showInterpreter, setShowInterpreter] = useState(false);
  const [showUnitConverter, setShowUnitConverter] = useState(false); // Novo estado para controlar a tela de conversão
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (value) => {
    setInput(input + value);
    setDisplay(input + value);
  };

  const calculate = () => {
    setTimeout(() => {
      try {
        const result = eval(input.replace(/x/g, '*')).toString(); 
        setDisplay(result);
        setInput(result);
      } catch (error) {
        setDisplay('Erro');
      }
    }, 0);
  };

  const clearInput = () => {
    setInput('');
    setDisplay('0');
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const toggleInterpreter = () => {
    setShowInterpreter(!showInterpreter);
  };

  const toggleUnitConverter = () => {
    setShowUnitConverter(!showUnitConverter); // Função para alternar a tela de conversão
  };

  return (
    <div style={styles.container}>
      {showSolution ? (
        <Solution input={input} onClose={toggleSolution} />
      ) : showInterpreter ? (
        <MathInterpreter onClose={toggleInterpreter} />
      ) : showUnitConverter ? ( // Condicional para renderizar a tela de conversão
        <UnitConverter onClose={toggleUnitConverter} />
      ) : (
        <>
          <div style={styles.display}>{display || '0'}</div>
          <div style={styles.buttonContainer}>
            {['C', '7', '8', '9', '/',
              '4', '5', '6', 'x', 
              '1', '2', '3', '-',
              '0', '.', '=', '+'].map((value) => (
                <div key={value} style={styles.buttonWrapper}>
                  <button
                    style={value === '=' ? styles.equalsButton : styles.button}
                    onClick={value === 'C' ? clearInput : value === '=' ? calculate : () => handleClick(value)}
                    onMouseDown={value !== '=' ? () => setActiveButton(value) : null}
                    onMouseUp={value !== '=' ? () => setActiveButton(null) : null}
                    onMouseLeave={value !== '=' ? () => setActiveButton(null) : null}
                  >
                    <span style={getSymbolStyle(value)}>{value}</span>
                    {value !== '=' && <div style={activeButton === value ? styles.activeFlash : styles.borderTop} />}
                  </button>
                </div>
              ))}
          </div>
          <div style={styles.additionalButtonsContainer}>
            <button style={styles.additionalButton} onClick={toggleSolution}>
              Solução
            </button>
            <button style={styles.additionalButton} onClick={toggleInterpreter}>
              Interpretar
            </button>
            <button style={styles.additionalButton} onClick={toggleUnitConverter}> {/* Novo botão */}
              Conversor
            </button>
          </div>
        </>
      )}
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
    background: 'linear-gradient(to bottom, #0b0b0b, #1a1a1a)',
    fontFamily: 'Roboto Rounded, sans-serif',
  },
  display: {
    width: '90%',
    height: '100px',
    backgroundColor: '#222222',
    textAlign: 'right',
    padding: '20px',
    fontSize: '48px',
    borderRadius: '20px',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'Roboto Rounded, sans-serif',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '90%',
    maxWidth: '600px',
  },
  buttonWrapper: {
    position: 'relative',
    width: '100%',
  },
  borderTop: {
    position: 'absolute',
    top: '-4px',
    left: '0',
    right: '0',
    height: '4px',
    backgroundColor: '#fff',
    transition: 'all 0.3s',
    borderRadius: '20px 20px 0 0',
    opacity: 0.5,
    zIndex: 0,
  },
  activeFlash: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
    animation: 'flashAnimation 0.3s',
    zIndex: 1,
    borderRadius: '20px',
  },
  button: {
    width: '100%',
    height: '70px',
    borderRadius: '20px',
    fontSize: '34px',
    backgroundColor: 'rgba(66, 66, 66, 0.5)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.1s',
    outline: 'none',
    opacity: 0.9,
    boxShadow: '0 2px 5px rgba(211, 211, 211, 0.5)',
    position: 'relative',
    overflow: 'hidden',
  },
  equalsButton: {
    width: '100%',
    height: '70px',
    borderRadius: '20px',
    fontSize: '34px',
    backgroundColor: 'rgba(255, 152, 0, 0.7)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.1s',
    outline: 'none',
    opacity: 0.9,
    boxShadow: '0 2px 5px rgba(211, 211, 211, 0.5)',
  },
  additionalButtonsContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    gap: '10px',
  },
  additionalButton: {
    flex: 1,
    height: '60px',
    borderRadius: '15px',
    fontSize: '18px',
    backgroundColor: 'rgba(66, 66, 66, 0.5)', 
    color: '#fff', 
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(211, 211, 211, 0.5)',
  },
};

const getSymbolStyle = (value) => {
  if (['+', '-', 'x', '/'].includes(value)) { 
    return {
      color: 'rgba(255, 165, 0, 0.8)',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    };
  }
  return { color: '#fff' };
};

const flashAnimation = `
@keyframes flashAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(flashAnimation, styleSheet.cssRules.length);

export default App;
