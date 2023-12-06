import './TextBox.css';

interface props {
  text?: string;
  name: string;
}

const TextBox = ({ text = '', name }: props) => {
  return (
    <input
      className={'textBox   textBox-' + name}
      type="text"
      value={text}
      readOnly
    />
  );
};

export default TextBox;
