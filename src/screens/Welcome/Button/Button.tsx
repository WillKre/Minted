import { button, buttonContent, topText, bottomText } from './Button.css';

type ButtonProps = {
  title: string;
  subtitle: string;
  onClick: () => void;
};

export function Button({ title, subtitle, onClick }: ButtonProps) {
  return (
    <button type="button" className={button} onClick={onClick}>
      <div className={buttonContent}>
        <p className={topText}>{title}</p>
        <p className={bottomText}>{subtitle}</p>
      </div>
    </button>
  );
}
