import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  marginTop: '1rem',
  flexDirection: 'column',
});

export const label = style({
  color: '#FFF',
  marginBottom: '0.5rem',
});

export const img = style({
  width: '120px',
  height: '120px',
  margin: '0 auto',
  borderRadius: '0.5rem',
});
