import { style } from '@vanilla-extract/css';

export const button = style({
  border: 'none',
  cursor: 'pointer',
  marginTop: '1rem',
  borderRadius: '0.5rem',
});

export const buttonContent = style({
  color: '#FFF',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'transform 0.125s ease',
  background: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    transform: 'scale(1.025)',
    background: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
});

export const topText = style({
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const bottomText = style({
  color: '#ccc',
  marginTop: '0.5rem',
  fontSize: '0.875rem',
});
