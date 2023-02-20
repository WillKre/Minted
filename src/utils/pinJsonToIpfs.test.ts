import axios from 'axios';
import { expect, it, Mock, vi } from 'vitest';

import { pinJsonToIpfs } from './pinJsonToIpfs';

vi.mock('axios');
const mockPost = axios.post as Mock;
const jsonBody = {
  name: 'mock_name',
  description: 'mock_description',
  image: 'mock_image',
  external_url: 'mock_external_url',
  attributes: [],
};

it('should return the concatenated url with the IPFS hash', async () => {
  mockPost.mockResolvedValue({ data: { IpfsHash: '123abc' } });

  const { pinataUrl } = await pinJsonToIpfs(jsonBody);

  expect(mockPost).toHaveBeenCalledWith('/.netlify/functions/pinJsonToIpfs', {
    data: jsonBody,
  });
  expect(pinataUrl).toEqual('https://gateway.pinata.cloud/ipfs/123abc');
});

it('should return null if the request fails', async () => {
  mockPost.mockRejectedValue(new Error());

  const { pinataUrl } = await pinJsonToIpfs(jsonBody);

  expect(mockPost).toHaveBeenCalledWith('/.netlify/functions/pinJsonToIpfs', {
    data: jsonBody,
  });
  expect(pinataUrl).toEqual('');
});
