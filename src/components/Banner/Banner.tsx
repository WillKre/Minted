import { en } from '../../lang';
import { container, text } from './Banner.css';
import { capitalize } from '../../utils/capitalize';
import { SUPPORTED_NETWORKS } from '../../constants';

export function formatNetworkName(network: string) {
  return network === 'homestead' ? 'Mainnet' : capitalize(network);
}

export function Banner() {
  return (
    <div className={container}>
      <p className={text}>
        {en.common.unsupportedNetwork} (
        {SUPPORTED_NETWORKS.map(formatNetworkName).join(', ')})
      </p>
    </div>
  );
}
