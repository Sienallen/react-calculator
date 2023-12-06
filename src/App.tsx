import { useState } from 'react';
import Button from './component/Button';
import TextBox from './component/TextBox';
import './App.css';

function App() {
  const [output, setOutput] = useState('0');
  const [temp, setTemp] = useState('0');
  const [operator, setOperator] = useState('');
  const [solved, setSolved] = useState(false);

  // changes output that displays when pressing buttons 0-9
  const clickHandler = (text: string) => {
    setOutput(text);
  };

  //adds 0-9 to output string that displays
  const combineText = (text: string) => {
    console.log(operator);
    if (false) {
      setOutput(text);
    } else {
      setOutput(output !== '0' ? output + text : text);
    }
  };

  const moveString = (symbol: string) => {
    setTemp(output);
    setOutput('0');
    setOperator(symbol);
  };

  const solve = () => {
    switch (operator) {
      case '+': {
        setOutput((parseFloat(output) + parseFloat(temp)).toString());
        setSolved(true);
        setOperator('');
        break;
      }
      case '-': {
        setOutput((parseFloat(output) - parseFloat(temp)).toString());
        setSolved(true);
        setOperator('');
        break;
      }
      case 'x': {
        setOutput((parseFloat(output) * parseFloat(temp)).toString());
        setSolved(true);
        setOperator('');
        break;
      }
      case '÷': {
        setOutput((parseFloat(output) / parseFloat(temp)).toString());
        setSolved(true);
        setOperator('');
        break;
      }
      case '': {
        setOutput(output);
        setSolved(true);
      }
    }
  };

  return (
    <>
      <div>
        <TextBox text={temp} name="temp"></TextBox>
        <TextBox text={output} name="output"></TextBox>
        <div className="btn-grid">
          <Button text={'%'} onClick={clickHandler} />
          <Button
            text={'CE'}
            onClick={() => {
              setOutput('0');
            }}
          />
          <Button
            text={'C'}
            onClick={() => {
              setOutput('0');
              setTemp('0');
              setSolved(false);
            }}
          />
          <Button text={'<-'} onClick={() => setOutput(output.slice(0, -1))} />
          <Button
            text={'1/x'}
            onClick={() => setOutput((1 / parseFloat(output)).toString())}
          />
          <Button
            text={'x²'}
            onClick={() =>
              setOutput(Math.pow(parseFloat(output), 2).toString())
            }
          />
          <Button
            text={'√x'}
            onClick={() => setOutput(Math.sqrt(parseFloat(output)).toString())}
          />
          <Button text={'÷'} onClick={moveString} />
          <Button text={'7'} onClick={combineText} />
          <Button text={'8'} onClick={combineText} />
          <Button text={'9'} onClick={combineText} />
          <Button text={'x'} onClick={moveString} />
          <Button text={'4'} onClick={combineText} />
          <Button text={'5'} onClick={combineText} />
          <Button text={'6'} onClick={combineText} />
          <Button text={'-'} onClick={moveString} />
          <Button text={'1'} onClick={combineText} />
          <Button text={'2'} onClick={combineText} />
          <Button text={'3'} onClick={combineText} />
          <Button text={'+'} onClick={moveString} />
          <Button text={'+/-'} onClick={clickHandler} />
          <Button text={'0'} onClick={combineText} />
          <Button text={'.'} onClick={clickHandler} />
          <Button text={'='} onClick={solve} />
        </div>
      </div>
    </>
  );
}

export default App;
