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

export const buttons = style({
  width: '100%',
  paddingTop: '0.5rem',
});

export const button = style({
  width: '100%',
  color: '#FFF',
  border: 'none',
  height: '3rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
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
  color: '#f5f5f5',
  marginLeft: '12px',
  marginBottom: '6px',
  borderRadius: '0.5rem',
  padding: '0.25rem 0.5rem',
  background: 'rgba(0, 0, 0, 0.2)',
  ':hover': {
    cursor: 'pointer',
    background: 'rgba(0, 0, 0, 0.5)',
  },
});

export const smallImg = style({
  width: '120px',
  height: '120px',
  margin: '0 auto',
  borderRadius: '0.5rem',
});

export const img = style({
  width: '200px',
  height: '200px',
  margin: '0 auto',
  borderRadius: '0.5rem',
});

export const text = style({
  fontSize: '0.875rem',
});

export const loadingWrapper = style({
  width: '100%',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
});
