import { describe, expect, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize()', () => {
  describe('given a valid input (string)', () => {
    it('capitalizes a string', () => {
      expect(capitalize('hal')).toEqual('Hal');
    });

    it('capitalizes a string with a number', () => {
      expect(capitalize('szabo1')).toEqual('Szabo1');
    });

    it('capitalizes a string with a symbol', () => {
      expect(capitalize('nakamoto!')).toEqual('Nakamoto!');
    });

    it('leaves an already capitalized string alone', () => {
      expect(capitalize('Satoshi')).toEqual('Satoshi');
    });
  });

  describe('given an invalid input', () => {
    it('returns an empty string', () => {
      expect(capitalize(undefined)).toEqual('');
      expect(capitalize('')).toEqual('');
    });
  });
});
