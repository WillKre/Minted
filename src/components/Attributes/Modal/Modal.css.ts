import { style } from '@vanilla-extract/css';

export const modal = style({
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  margin: 'auto',
  width: '350px',
  height: '350px',
  position: 'absolute',
  borderRadius: '0.5rem',
  border: '2px solid #333',
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
});

export const container = style({
  padding: '1.5rem',
});

export const overlay = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
};
