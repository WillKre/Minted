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
  backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
});

export const image = style({
  width: 20,
  height: 20,
  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))',
});
