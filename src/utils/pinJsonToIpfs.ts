import axios from 'axios';

const VITE_PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

type ERC721MetaDataStandard = {
  name: string;
  description: string;
  image: string;
  external_url?: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
};

export async function pinJSONToIPFS(jsonBody: ERC721MetaDataStandard) {
  try {
    const { data } = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${VITE_PINATA_JWT}`,
      },
      data: {
        pinataOptions: {
          cidVersion: 1,
        },
        pinataContent: jsonBody,
      },
    });

    return {
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorMessage: error.message,
      };
    }

    return {
      errorMessage: 'An error occurred while pinning JSON to IPFS',
    };
  }
}
