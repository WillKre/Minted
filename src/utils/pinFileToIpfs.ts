import axios from 'axios';

import { en } from '../lang';
import { showToast } from './showToast';

export async function pinFileToIPFS(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    showToast(en.minter.toast.uploadingImage, '🏞');

    const { data } = await axios({
      method: 'post',
      data: formData,
      url: `/.netlify/functions/pinFileToIpfs`,
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
