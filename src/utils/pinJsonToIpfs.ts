import axios from 'axios';

const VITE_PINATA_JWT = import.meta.env.VITE_PINATA_JWT;

export async function pinJSONToIPFS(jsonBody: string) {
  try {
    const { data } = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${VITE_PINATA_JWT}`,
      },
      data: jsonBody,
    });

    return {
      success: true,
      pinataUrl: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: 'An error occurred while pinning JSON to IPFS',
    };
  }
}
