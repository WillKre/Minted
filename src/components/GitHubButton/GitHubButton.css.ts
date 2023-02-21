import { style } from '@vanilla-extract/css';

export const button = style({
  top: '1rem',
  left: '1rem',
  border: 'none',
  display: 'flex',
  cursor: 'pointer',
  padding: '0.61rem',
  fontWeight: 'bolder',
  alignItems: 'center',
  position: 'absolute',
  background: '#1A1B1F',
  borderRadius: '0.5rem',
  transition: 'all 0.125s ease-in-out',
  ':hover': {
    transform: 'scale(1.025)',
    background: '#333',
  },
  ':focus-visible': {
    transform: 'scale(1.025)',
    background: '#333',
  },
});

export const image = style({
  width: 20,
  height: 20,
  cursor: 'pointer',
  filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))',
});
