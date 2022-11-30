export const en = {
  common: {
    connect: 'Connect',
    connectMetaMask: 'Please connect to MetaMask',
    gitHubLogoAlt: 'GitHub logo',
    metaMaskLogoAlt: 'Metamask logo',
  },
  welcome: {
    title: 'Welcome!',
    subtitle: 'To get started, select one of the following options:',
    deployButtonTitle: 'Deploy your NFT Collection',
    mintButtonTitle: 'Mint your NFT',
  },
  deployer: {
    form: {
      name: {
        label: 'Name',
        placeholder: 'e.g. Mintz',
      },
      symbol: {
        label: 'Symbol',
        placeholder: 'e.g. MINT',
      },
      submitButtonTitle: 'Deploy',
    },
  },
  minter: {
    form: {
      link: {
        label: 'Link',
        placeholder: 'e.g. https://gateway.pinata.cloud/ipfs/<hash>',
      },
      name: {
        label: 'Name',
        placeholder: 'e.g. Bored Dog Yacht Club #1',
      },
      description: {
        label: 'Description',
        placeholder: 'e.g. Next generation Bored Dogs...',
      },
    },
    success: {
      title: 'Successfully minted your NFT!',
      kicker: 'Check out the transaction here:',
    },
    errors: {
      ipfs: 'Error pinning your JSON to IPFS',
    },
  },
};
