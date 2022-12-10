import { en } from '../../lang';
import { container, text } from './Banner.css';
import { capitalize } from '../../utils/capitalize';
import { SUPPORTED_NETWORKS } from '../../constants';

export function Banner() {
  return (
    <div className={container}>
      <span className={text}>
        {en.common.unsupportedNetwork} (
        {SUPPORTED_NETWORKS.map((network) =>
          network === 'homestead' ? 'Mainnet' : capitalize(network)
        ).join(', ')}
        )
      </span>
    </div>
  );
}
