import { style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '1.75rem',
  textAlign: 'center',
  paddingBottom: '2rem',
  transition: 'margin-top 0.3s ease-in-out',

  '@media': {
    'screen and (max-width: 768px)': {
      marginTop: '6rem',
    },
  },
});
