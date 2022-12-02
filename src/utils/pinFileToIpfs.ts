import axios from 'axios';

import { en } from '../lang';
import { showToast } from './showToast';

const VITE_PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

export async function pinFileToIPFS(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  try {
    showToast(en.minter.toast.uploadingImage, '🏞');

    const { data } = await axios.post(url, formData, {
      headers: {
        'Content-Type': `multipart/form-data;`,
        Authorization: `Bearer ${VITE_PINATA_JWT}`,
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
