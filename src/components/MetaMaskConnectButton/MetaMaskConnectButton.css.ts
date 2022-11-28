import { style } from '@vanilla-extract/css';

export const button = style({
  top: '1rem',
  color: '#FFF',
  right: '1rem',
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

export const text = style({
  margin: '0 8px',
});
