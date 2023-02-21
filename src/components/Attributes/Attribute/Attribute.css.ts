import { style } from '@vanilla-extract/css';

export const button = style({
  width: '100%',
  color: '#FFF',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '0.4rem 1rem',
  backgroundColor: 'transparent',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const container = style({
  display: 'grid',
  fontSize: '0.75rem',
  gridTemplateColumns: '1fr 1fr',
});
