import axios from 'axios';

import { en } from '../lang';
import { showToast } from './showToast';

const VITE_PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
const VITE_PINATA_API_SECRET = import.meta.env.VITE_PINATA_API_SECRET;

export async function pinFileToIPFS(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  try {
    showToast(en.minter.toast.uploadingImage, '🏞');

    const { data } = await axios.post(url, formData, {
      headers: {
        'Content-Type': `multipart/form-data;`,
        pinata_api_key: VITE_PINATA_API_KEY,
        pinata_secret_api_key: VITE_PINATA_API_SECRET,
      },
    });

    showToast(en.minter.toast.uploadedImage, '✅');

    return {
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    showToast(en.minter.toast.uploadImageError, '🚨');

    return {
      pinataUrl: null,
    };
  }
}
