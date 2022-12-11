import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  height: '100%',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const title = style({
  marginBottom: '1rem',
});

export const buttons = style({
  display: 'flex',
  flexDirection: 'column',
});
