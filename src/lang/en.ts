export const en = {
  common: {
    nft: 'NFT',
    back: 'Back',
    home: 'Home',
    image: 'Image',
    preview: 'Preview',
    connect: 'Connect',
    contract: 'Contract',
    blockchain: 'Blockchain',
    transaction: 'Transaction',
    gitHubLogoAlt: 'GitHub logo',
    metaMaskLogoAlt: 'Metamask logo',
    connectMetaMask: 'Please connect to MetaMask',
    unsupportedNetwork: 'Please connect your wallet to a supported network',
    dragNDrop: "Drag 'n' drop an image or click here to upload to IPFS",
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
      info: 'Name & Symbol customisation is coming soon!',
      submitButtonTitle: 'Deploy',
    },
    success: {
      title: 'Successfully deployed contract!',
      kicker: 'Check out the transaction here:',
      mintNft: 'Mint NFT using this contract',
      imgAlt: 'Blockchain',
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
    mint: 'Mint',
    success: {
      title: 'Successfully minted your NFT!',
      kicker: 'Check out the transaction here:',
      buttonText: 'Mint Another',
      imgAlt: 'The minted NFT',
    },
    toast: {
      invalidContractAddress: 'Invalid contract address',
      errorPreparing:
        'An error occurred while preparing your transaction. Please check your contract address.',
      errorPinning: 'An error occurred while pinning JSON to IPFS',
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
