import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
});

export const form = style({
  width: '100%',
});

export const mintButton = style({
  width: '100%',
  color: '#FFF',
  border: 'none',
  padding: '1rem',
  cursor: 'pointer',
  marginTop: '3rem',
  borderRadius: '0.5rem',
  backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
});
