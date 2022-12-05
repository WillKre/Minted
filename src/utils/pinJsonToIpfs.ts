import axios from 'axios';
import { showToast } from './showToast';

const { VITE_PINATA_API_KEY, VITE_PINATA_API_SECRET } = import.meta.env;

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
        pinata_api_key: VITE_PINATA_API_KEY,
        pinata_secret_api_key: VITE_PINATA_API_SECRET,
      },
      data: {
        pinataContent: jsonBody,
        pinataOptions: { cidVersion: 1 },
      },
    });

    return {
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    showToast(
      error instanceof Error
        ? error.message
        : 'An error occurred while pinning JSON to IPFS',
      '🚨'
    );

    return {
      pinataUrl: null,
    };
  }
}
