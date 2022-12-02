import { style } from '@vanilla-extract/css';

export const section = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const form = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const button = style({
  width: '100%',
  color: '#FFF',
  border: 'none',
  padding: '1rem',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 22) 100%)',
  ':hover': {
    backgroundImage: 'linear-gradient(rgb(32, 39, 56) 0px, rgb(7, 8, 70) 100%)',
  },
  ':disabled': {
    cursor: 'not-allowed',
    backgroundImage: 'none',
  },
});

export const labelActionButton = style({
  border: 'none',
  marginLeft: 12,
  marginBottom: 6,
  fontStyle: 'italic',
  background: 'transparent',
  ':hover': {
    color: '#CCC',
    cursor: 'pointer',
  },
});

export const img = style({
  width: 200,
  height: 200,
  margin: '0 auto',
  borderRadius: '0.5rem',
});
