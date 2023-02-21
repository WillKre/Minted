import { style } from '@vanilla-extract/css';

export const attributesContainerPopulated = style({
  height: '107.5px',
  marginTop: '1rem',
  overflowY: 'scroll',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
});

export const attributesContainerEmpty = style({
  display: 'flex',
  marginTop: '1rem',
  height: '107.5px',
  alignItems: 'center',
  borderRadius: '0.5rem',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
});

export const title = style({
  color: '#FFF',
});

export const titleContainer = style({
  marginTop: '1rem',
  marginBottom: '0.5rem',
});
