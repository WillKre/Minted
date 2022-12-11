import { style } from '@vanilla-extract/css';

export const container = style({
  width: '320px',
  height: '500px',
  padding: '2rem',
  borderRadius: '0.5rem',
  margin: '6rem auto 6rem auto',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',

  '@media': {
    'screen and (max-width: 425px)': {
      width: '300px',
    },
    'screen and (max-width: 375px)': {
      width: '260px',
    },
  },
});
