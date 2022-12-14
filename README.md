# Minted

Hosted @ https://NftMinted.netlify.app/

Application which allows you to deploy your own NFT contract and/or mint your own NFTs which conform to the [official ERC-721 metadata standards](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md).

You can either mint against your own contract (if you have previously deployed one via *Minted* or elsewhere) by providing the custom contract address, or against the generic already deployed *Minted* contract (`0x55963cC37764dc1932ed7Eb0466432d79d70345e`).

## Run Locally

_Prerequisite: Create a `.env` file within the root directory, copy over the contents of `.env-sample` and populate the values with your own keys._

This project uses [Netlify Functions](https://www.netlify.com/products/functions/), so can be run locally using [Netlify CLI](https://www.netlify.com/products/cli/):

1. **`npm install netlify-cli -g`**
2. **`netlify dev`**

## Run Tests

- **`npm run test`**

## Preview

https://user-images.githubusercontent.com/7396157/207478914-38338dd3-f8d8-4772-a4c1-420d5036e7d1.mov
