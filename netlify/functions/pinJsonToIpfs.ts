import axios from 'axios';
import { Handler } from '@netlify/functions';

const { VITE_PINATA_API_KEY, VITE_PINATA_API_SECRET } = process.env;

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      throw new Error('Unable to parse body');
    }

    const { data } = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      headers: {
        'Content-Type': 'application/json',
        pinata_api_key: VITE_PINATA_API_KEY,
        pinata_secret_api_key: VITE_PINATA_API_SECRET,
      },
      data: {
        pinataContent: JSON.parse(event.body),
        pinataOptions: { cidVersion: 1 },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: error.toString(),
    };
  }
};
