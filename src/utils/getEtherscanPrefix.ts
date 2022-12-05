export function getEtherscanPrefix(chainName?: string) {
  switch (chainName) {
    case 'homestead':
      return '';
    case 'goerli':
      return 'goerli.';
    default:
      return '';
  }
}
