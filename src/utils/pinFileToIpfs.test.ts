import axios from 'axios';
import { expect, it, Mock, vi } from 'vitest';

import { pinFileToIpfs } from './pinFileToIpfs';
import { appendFileToForm } from './appendFileToForm';

vi.mock('axios');
const mockPost = axios.post as Mock;
const file = new File([new ArrayBuffer(1)], 'mock-image.png');
const url = '/.netlify/functions/pinFileToIpfs';
const form = appendFileToForm(file);

it('should return the concatenated url with the IPFS hash', async () => {
  const IpfsHash = 'caf4bcfg4ep767tjp5lxyanx5urpjjgx5q2volvy';
  mockPost.mockResolvedValue({ data: { IpfsHash } });

  const { pinataUrl } = await pinFileToIpfs(form);

  expect(mockPost).toHaveBeenCalledWith(url, { data: form });
  expect(pinataUrl).toEqual(`https://gateway.pinata.cloud/ipfs/${IpfsHash}`);
});

it('should return an empty string if the request fails', async () => {
  mockPost.mockRejectedValue(new Error());

  const { pinataUrl } = await pinFileToIpfs(form);

  expect(mockPost).toHaveBeenCalledWith(url, { data: form });
  expect(pinataUrl).toEqual('');
});
