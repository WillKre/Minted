import axios from 'axios';

const VITE_PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

export async function pinFileToIPFS(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const { data } = await axios.post(url, formData, {
    headers: {
      'Content-Type': `multipart/form-data;boundary=${formData._boundary}`,
      Authorization: `Bearer ${VITE_PINATA_JWT}`,
    },
  });

  return {
    pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
  };
}
