export const en = {
  common: {
    image: 'Image',
    dragNDrop: "Drag 'n' drop an image or click here to upload to IPFS",
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
    next: 'Next',
    minting: 'Minting...',
    mint: 'Mint',
    success: {
      title: 'Successfully minted your NFT!',
      kicker: 'Check out the transaction here:',
    },
    toast: {
      uploadingImage: 'Uploading your image to IPFS...',
      uploadedImage: 'Successfully uploaded your image',
      uploadImageError:
        'Unable to upload your image, please use the URI input if the problem persists',
      fileSelection: 'An error occurred while selecting this file',
      ipfs: 'Error pinning your JSON to IPFS',
    },
  },
};
