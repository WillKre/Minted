import { en } from '../../lang';
import { container } from './Header.css';

import minted from './minted.png';

export function Header() {
  return (
    <header className={container}>
      <img src={minted} width={120} alt={en.common.minted} />
    </header>
  );
}
