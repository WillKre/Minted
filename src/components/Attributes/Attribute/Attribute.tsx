import { TAttribute } from '../../../types';
import { button, container } from './Attribute.css';

type AttributeProps = {
  trait_type: string;
  value: string;
  handleOnClick: (attribute: TAttribute) => void;
};

export function Attribute({
  trait_type,
  value,
  handleOnClick,
}: AttributeProps) {
  return (
    <button
      onClick={() => handleOnClick({ trait_type, value })}
      className={button}
    >
      <div className={container}>
        <p>{trait_type}</p>
        <b>{value}</b>
      </div>
    </button>
  );
}
