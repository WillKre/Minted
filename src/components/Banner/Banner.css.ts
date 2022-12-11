import { style } from '@vanilla-extract/css';

export const container = style({
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '30px',
  display: 'flex',
  padding: '0.5rem',
  textAlign: 'center',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
});

export const text = style({
  fontSize: '0.875rem',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '0.75rem',
    },
  },
});
