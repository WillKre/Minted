import axios from 'axios';
import { en } from '../lang';
import { showToast } from './showToast';

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

export async function pinJsonToIpfs(jsonBody: ERC721MetaDataStandard) {
  try {
    const { data } = await axios.post('/.netlify/functions/pinJsonToIpfs', {
      data: jsonBody,
    });

    return {
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    showToast(en.minter.toast.errorPinning, '🚨');

    return {
      pinataUrl: '',
    };
  }
}
