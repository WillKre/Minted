const { VITE_PINATA_API_KEY, VITE_PINATA_API_SECRET } = process.env;
import axios from 'axios';
import busboy from 'busboy';
import FormData from 'form-data';
import { Handler } from '@netlify/functions';

type Fields = { file: { filename: string; type: string; content: Buffer }[] };

function parseMultipartForm(event): Promise<Fields> {
  return new Promise((resolve) => {
    const fields = {
      file: [],
    };
    const bb = busboy({ headers: event.headers });

    bb.on('file', (name, file, info) => {
      const { filename, mimeType } = info;

      file.on('data', (data) => {
        if (!fields[name]) fields[name] = [];
        fields[name].push({ filename, type: mimeType, content: data });
      });
    });

    bb.on('close', () => {
      resolve(fields);
    });

    bb.end(Buffer.from(event.body, 'base64'));
  });
}

export const handler: Handler = async (event) => {
  try {
    const fields = await parseMultipartForm(event);
    const file = fields.file[0];

    if (!fields || !file) {
      throw new Error('Unable to parse image');
    }

    const formData = new FormData();
    const metadata = JSON.stringify({ name: file.filename });
    const options = JSON.stringify({ cidVersion: 0 });
    formData.append('file', file.content, { filepath: file.filename });
    formData.append('pinataMetadata', metadata);
    formData.append('pinataOptions', options);

    const { data } = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Content-Type': 'multipart/form-data;',
        pinata_api_key: VITE_PINATA_API_KEY,
        pinata_secret_api_key: VITE_PINATA_API_SECRET,
      },
      data: formData,
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
