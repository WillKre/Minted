import { describe, expect, it } from 'vitest';

import { getEtherscanPrefix } from './getEtherscanPrefix';

describe('given a matching input', () => {
  it('should return the mapped value', () => {
    expect(getEtherscanPrefix('homestead')).toEqual('');
    expect(getEtherscanPrefix('goerli')).toEqual('goerli.');
  });
});

describe('given a non-matching/invalid input', () => {
  it('should return an empty string', () => {
    expect(getEtherscanPrefix('')).toEqual('');
    expect(getEtherscanPrefix(undefined)).toEqual('');
    expect(getEtherscanPrefix('invalid')).toEqual('');
  });
});
