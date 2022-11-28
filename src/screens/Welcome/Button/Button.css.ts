import { style } from '@vanilla-extract/css';

export const button = style({
  marginTop: 36,
  border: 'none',
  cursor: 'pointer',
});

export const buttonContent = style({
  height: 100,
  color: '#FFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
});
