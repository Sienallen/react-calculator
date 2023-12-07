import { useState } from 'react';
import Button from './component/Button';
import TextBox from './component/TextBox';
import './App.css';

function App() {
  const [output, setOutput] = useState('0');
  const [temp, setTemp] = useState('0');
  const [operator, setOperator] = useState('');
  const [reset, setReset] = useState(false);
  const [expression, setExpression] = useState('');

  // changes output that displays when pressing buttons 0-9
  const clickHandler = (text: string) => {
    setOutput(text);
  };

  const period = (text: string) => {
    if (output.charAt(output.length - 1) !== text) {
      setOutput(output + text);
      setReset(false);
    }
  };

  //adds 0-9 to output string that displays
  const combineText = (text: string) => {
    if (reset) {
      console.log('insde reset');
      setTemp(output);
      setOutput(text);
      setReset(false);
      setExpression(text);
    } else {
      setOutput(output !== '0' ? output + text : text);
    }
  };

  const moveString = (symbol: string) => {
    console.log('the operator ' + operator);
    if (operator === '') {
      setTemp(output);
      setOutput('0');
      setOperator(symbol);
      console.log('output is' + output);
      console.log('solved is' + reset);
      setExpression(output + symbol);
      setReset(false);
    } else {
      solve();
      setOperator(symbol);
    }
  };

  const solve = () => {
    console.log(operator);
    console.log(
      'expression is' + expression.substring(expression.length - output.length)
    );

    setExpression(
      output != expression.substring(expression.length - output.length)
        ? expression + output + '='
        : expression + '='
    );

    switch (operator) {
      case '+': {
        setOutput((parseFloat(temp) + parseFloat(output)).toString());
        setReset(true);
        setOperator('');
        break;
      }
      case '-': {
        setOutput((parseFloat(temp) - parseFloat(output)).toString());
        setReset(true);
        setOperator('');
        break;
      }
      case 'x': {
        setOutput((parseFloat(temp) * parseFloat(output)).toString());
        setReset(true);
        setOperator('');
        break;
      }
      case '÷': {
        setOutput((parseFloat(temp) / parseFloat(output)).toString());
        setReset(true);
        setOperator('');
        break;
      }
      case '': {
        setOutput(output);
        setReset(true);
        break;
      }
    }
  };

  return (
    <>
      <div>
        <TextBox text={expression} name="temp"></TextBox>
        <TextBox text={output} name="output"></TextBox>
        <div className="btn-grid">
          <Button text={'%'} onClick={clickHandler} />
          <Button
            text={'CE'}
            onClick={() => {
              setOutput('0');
              setExpression(
                expression.substring(0, expression.length - output.length)
              );
            }}
          />
          <Button
            text={'C'}
            onClick={() => {
              setOutput('0');
              setTemp('0');
              setExpression('');
              setReset(false);
              setOperator('');
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
          <Button
            text={'+/-'}
            onClick={() => {
              setOutput(
                parseFloat(output) < 0 ? output.substring(1) : '-' + output
              );
            }}
          />
          <Button text={'0'} onClick={combineText} />
          <Button text={'.'} onClick={period} />
          <Button text={'='} onClick={solve} />
        </div>
      </div>
    </>
  );
}

export default App;
