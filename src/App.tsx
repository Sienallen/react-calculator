import { useState } from 'react';
import Button from './component/Button';
import TextBox from './component/TextBox';
import './App.css';

//https://www.youtube.com/watch?v=RZ5wKYbOM_I

function App() {
  const [output, setOutput] = useState('0');
  const [temp, setTemp] = useState('0');
  const [operator, setOperator] = useState('');
  const [reset, setReset] = useState(false);
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState<string[]>([]);

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
      setTemp(output);
      setOutput(text);
      setReset(false);
    } else {
      setOutput(output !== '0' ? output + text : text);
    }
  };

  const moveString = (symbol: string) => {
    if (operator === '') {
      setTemp(output);
      setOutput('0');
      setOperator(symbol);
      setExpression(output + ' ' + symbol);
      setReset(false);
    } else {
      /* solve(); */
      let solved = solve();
      setExpression(solved + ' ' + symbol);
      setOperator(symbol);
      setTemp(solved);
    }
  };

  const addHistory = (newHistory: string) => {
    setHistory([newHistory, ...history]);
  };

  const revertHistory = (text: string) => {
    let splitted = text.split(' ');
    setTemp(splitted[2]);
    setOutput(splitted[4]);
    setReset(true);
    setExpression(text.substring(0, text.length - splitted[4].length));
    console.log(splitted);
  };

  const solve = () => {
    let newHistory = expression + ' ' + output + ' = ';
    setExpression(
      output != expression.substring(expression.length - output.length)
        ? newHistory
        : expression + ' ='
    );

    let tempOutput: string = '';
    switch (operator) {
      case '+': {
        tempOutput = (parseFloat(temp) + parseFloat(output)).toString();
        break;
      }
      case '-': {
        tempOutput = (parseFloat(temp) - parseFloat(output)).toString();
        setOperator('');
        break;
      }
      case 'x': {
        tempOutput = (parseFloat(temp) * parseFloat(output)).toString();
        break;
      }
      case '÷': {
        tempOutput = (parseFloat(temp) / parseFloat(output)).toString();
        break;
      }
      case '': {
        tempOutput = output;
        break;
      }
    }
    newHistory = newHistory + tempOutput;
    setReset(true);
    setOperator('');
    setOutput(tempOutput);
    addHistory(newHistory);
    return tempOutput;
  };

  return (
    <>
      <h1 className="title">Calculator</h1>
      <div className="flexBox">
        <div className="calculator">
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
            <Button
              text={'<-'}
              onClick={() => setOutput(output.slice(0, -1))}
            />
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
              onClick={() =>
                setOutput(Math.sqrt(parseFloat(output)).toString())
              }
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

        {
          <div className="historyBox">
            <h2>History</h2>
            {history.map((data) => {
              return <Button text={data} onClick={revertHistory} />;
            })}
          </div>
        }
      </div>
    </>
  );
}

export default App;
