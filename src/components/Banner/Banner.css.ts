import { style } from '@vanilla-extract/css';

export const container = style({
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30px',
  display: 'flex',
  padding: '0.5rem',
  textAlign: 'center',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
});

export const text = style({
  fontSize: '1rem',
});
