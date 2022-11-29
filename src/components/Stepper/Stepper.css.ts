import { style } from '@vanilla-extract/css';

export const container = style({
  width: 320,
  height: 500,
  margin: 'auto',
  padding: '2rem',
  marginTop: '0.5rem',
  borderRadius: '0.5rem',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0);',
});

export const screen = style({
  height: 'calc(100% - 2rem)',
});

export const buttons = style({
  width: '100%',
  height: '2rem',
  paddingTop: '1rem',
});

export const button = style({
  width: '4rem',
  height: '2rem',
  border: 'none',
  cursor: 'pointer',
  marginBottom: '2rem',
  borderRadius: '0.5rem',
});
