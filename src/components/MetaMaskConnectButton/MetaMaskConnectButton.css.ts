import { style } from '@vanilla-extract/css';

export const button = style({
  top: '1rem',
  color: '#FFF',
  right: '1rem',
  border: 'none',
  padding: '1rem',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  alignItems: 'center',
  fontWeight: 'bolder',
  borderRadius: '0.5rem',
  background: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    background: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
});

export const image = style({
  width: '20px',
  height: '20px',
});

export const text = style({
  margin: '0 8px',
  fontSize: '0.75rem',
});
