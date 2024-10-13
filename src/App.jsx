import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  function appendVal(val) {
    setResult((prevResult) => prevResult + val);
  }

  function Clear() {
    setResult('');
  }

  function Submit() {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult('Error');
    }
  }

  return (
    <div className="App">
      <form>
        <p className="result">{result}</p>
        <div className="button-grid">
          <input type="button" value="1" onClick={() => appendVal('1')} />
          <input type="button" value="2" onClick={() => appendVal('2')} />
          <input type="button" value="3" onClick={() => appendVal('3')} />
          <input type="button" value="4" onClick={() => appendVal('4')} />
          <input type="button" value="5" onClick={() => appendVal('5')} />
          <input type="button" value="6" onClick={() => appendVal('6')} />
          <input type="button" value="7" onClick={() => appendVal('7')} />
          <input type="button" value="8" onClick={() => appendVal('8')} />
          <input type="button" value="9" onClick={() => appendVal('9')} />
          <input type="button" value="0" onClick={() => appendVal('0')} />
          <input type="button" value="-" onClick={() => appendVal('-')} />
          <input type="button" value="/" onClick={() => appendVal('/')} />
          <input type="button" value="*" onClick={() => appendVal('*')} />
          <input type="button" value="+" onClick={() => appendVal('+')} />
          <input type="button" value="C" onClick={Clear} className="clear-button" />
          <input type="button" value="S" onClick={Submit} className="submit-button" />
        </div>
      </form>
    </div>
  );
}

export default App