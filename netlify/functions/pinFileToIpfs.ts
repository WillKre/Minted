import axios from 'axios';
import busboy from 'busboy';
import FormData from 'form-data';
import { Handler } from '@netlify/functions';

const VITE_PINATA_API_KEY = process.env.VITE_PINATA_API_KEY;
const VITE_PINATA_API_SECRET = process.env.VITE_PINATA_API_SECRET;

type File = {
  filename: string;
  type: string;
  content: Buffer;
};

function parseMultipartForm(event): Promise<{} | File> {
  return new Promise((resolve) => {
    const fields = {};
    const bb = busboy({ headers: event.headers });

    bb.on('file', (name, file, info) => {
      const { filename, mimeType } = info;

      file.on('data', (data) => {
        if (!fields[name]) fields[name] = [];

        fields[name].push({
          filename,
          type: mimeType,
          content: data,
        });
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

    const formData = new FormData();
    formData.append('file', file.content, { filepath: file.filename });

    const metadata = JSON.stringify({ name: 'File name' });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({ cidVersion: 0 });
    formData.append('pinataOptions', options);

    const res = await axios({
      method: 'post',
      url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
      headers: {
        'Content-Type': `multipart/form-data;`,
        pinata_api_key: VITE_PINATA_API_KEY,
        pinata_secret_api_key: VITE_PINATA_API_SECRET,
      },
      data: formData,
    });

    console.log('res.data', res.data);

    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
