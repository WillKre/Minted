import { style } from '@vanilla-extract/css';

export const button = style({
  top: '1rem',
  left: '1rem',
  border: 'none',
  padding: '1rem',
  display: 'flex',
  cursor: 'pointer',
  fontWeight: 'bolder',
  alignItems: 'center',
  position: 'absolute',
  borderRadius: '0.5rem',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0);',
});

export const image = style({
  width: 20,
  height: 20,
  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))',
});
