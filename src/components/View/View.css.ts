import { style } from '@vanilla-extract/css';

export const container = style({
  width: '320px',
  height: '500px',
  margin: 'auto',
  padding: '2rem',
  marginTop: '0.5rem',
  borderRadius: '0.5rem',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0);',
});

export const screen = style({
  height: 'calc(100% - 3rem)',
});

export const img = style({
  width: '30px',
  height: '30px',
});

export const buttons = style({
  width: '100%',
  paddingTop: '0.5rem',
});
