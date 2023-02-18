import axios from 'axios';

import { en } from '../lang';
import { showToast } from './showToast';

export async function pinFileToIpfs(form: FormData) {
  try {
    showToast(en.minter.toast.uploadingImage, '🏞');

    const { data } = await axios.post(`/.netlify/functions/pinFileToIpfs`, {
      data: form,
    });

    showToast(en.minter.toast.uploadedImage, '✅');

    return {
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    showToast(en.minter.toast.uploadImageError, '🚨');

    return {
      pinataUrl: '',
    };
  }
}
