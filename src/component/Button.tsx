import './Button.css';

interface props {
  text: string;
  onClick: (item: string) => void;
}

const Button = ({ text, onClick }: props) => {
  return (
    <div>
      <button
        type="button"
        className={'btn btn-' + text}
        onClick={() => {
          onClick(text);
          console.log('btn-' + text);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
