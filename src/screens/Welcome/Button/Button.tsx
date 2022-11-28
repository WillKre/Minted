import { button, buttonContent } from './Button.css';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button type="button" className={button} onClick={onClick}>
      <div className={buttonContent}>
        <span>{title}</span>
      </div>
    </button>
  );
}
