import { useState } from 'react';
import Button from './component/Button';
import TextBox from './component/TextBox';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const clickHandler = (text: string) => {
    setOutput(text);
  };
  return (
    <>
      <div>
        <TextBox text={output} name="output"></TextBox>
        <div className="btn-grid">
          <Button text={'%'} onClick={clickHandler} />
          <Button text={'CE'} onClick={clickHandler} />
          <Button text={'C'} onClick={clickHandler} />
          <Button text={'<-'} onClick={clickHandler} />
          <Button text={'⅛'} onClick={clickHandler} />
          <Button text={'x²'} onClick={clickHandler} />
          <Button text={'√x'} onClick={clickHandler} />
          <Button text={'÷'} onClick={clickHandler} />
          <Button text={'7'} onClick={clickHandler} />
          <Button text={'8'} onClick={clickHandler} />
          <Button text={'9'} onClick={clickHandler} />
          <Button text={'x'} onClick={clickHandler} />
          <Button text={'4'} onClick={clickHandler} />
          <Button text={'5'} onClick={clickHandler} />
          <Button text={'6'} onClick={clickHandler} />
          <Button text={'-'} onClick={clickHandler} />
          <Button text={'1'} onClick={clickHandler} />
          <Button text={'2'} onClick={clickHandler} />
          <Button text={'3'} onClick={clickHandler} />
          <Button text={'+'} onClick={clickHandler} />
          <Button text={'+/-'} onClick={clickHandler} />
          <Button text={'0'} onClick={clickHandler} />
          <Button text={'.'} onClick={clickHandler} />
          <Button text={'='} onClick={clickHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
