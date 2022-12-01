import { style } from '@vanilla-extract/css';

export const container = style({
  color: '#111',
  display: 'flex',
  marginBottom: '2rem',
  flexDirection: 'column',
});

export const name = style({
  color: '#FFF',
  marginBottom: '0.5rem',
});

export const input = style({
  border: 'none',
  padding: '1rem',
  borderRadius: '0.5rem',
});

export const labelAndAction = style({
  display: 'flex',
  alignItems: 'center',
});
