import { style } from '@vanilla-extract/css';

export const container = style({
  color: '#111',
  display: 'flex',
  marginTop: '2rem',
  flexDirection: 'column',
});

export const name = style({
  color: '#FFF',
  marginBottom: '0.5rem',
});

export const input = style({
  width: 300,
  padding: '1rem',
});
