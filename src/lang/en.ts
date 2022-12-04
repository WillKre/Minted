export const en = {
  common: {
    back: 'Back',
    home: 'Home',
    image: 'Image',
    preview: 'Preview',
    contract: 'Contract',
    dragNDrop: "Drag 'n' drop an image or click here to upload to IPFS",
    connect: 'Connect',
    connectMetaMask: 'Please connect to MetaMask',
    gitHubLogoAlt: 'GitHub logo',
    metaMaskLogoAlt: 'Metamask logo',
  },
  errorPage: {
    title: 'Oops!',
    subtitle: 'Sorry, an unexpected error has occurred.',
  },
  welcome: {
    title: 'Welcome!',
    subtitle: 'To get started, select one of the following options:',
    deployButtonTitle: 'Deploy',
    deployButtonSubtitle: 'your own NFT contract',
    mintButtonTitle: 'Mint',
    mintButtonSubtitle: 'your own NFT token',
  },
  deployer: {
    form: {
      name: {
        label: 'Name',
        placeholder: 'e.g. Minted',
      },
      symbol: {
        label: 'Symbol',
        placeholder: 'e.g. MINT',
      },
      info: 'Note: Name & Symbol customisation is coming soon!',
      submitButtonTitle: 'Deploy',
    },
    success: {
      title: 'Successfully deployed contract!',
      kicker: 'Check out the transaction here:',
      mintNft: 'Mint NFT using this contract',
    },
    toast: {
      errorDeploying: 'Error deploying contract',
    },
  },
  minter: {
    form: {
      contract: {
        label: 'Contract',
      },
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
      buttonText: 'Mint Another',
    },
    toast: {
      errorMinting: 'An error occurred while attempting to mint your NFT',
      uploadingImage: 'Uploading your image to IPFS...',
      uploadedImage: 'Successfully uploaded your image',
      uploadImageError:
        'Unable to upload your image, please use the URI input if the problem persists',
      mintButtonValidation: 'Please add a valid image',
      fileSelection: 'An error occurred while selecting this file',
      ipfs: 'Error pinning your JSON to IPFS',
    },
  },
};
