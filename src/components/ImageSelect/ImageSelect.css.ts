import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const label = style({
  color: '#FFF',
  marginBottom: '0.5rem',
});

export const instructions = style({
  fontSize: 12,
  textAlign: 'center',
});

export const baseStyle = {
  flex: 1,
  borderWidth: 2,
  display: 'flex',
  padding: '20px',
  outline: 'none',
  color: '#bdbdbd',
  cursor: 'pointer',
  alignItems: 'center',
  borderStyle: 'dashed',
  borderRadius: '0.5rem',
  borderColor: '#eeeeee',
  backgroundColor: '#fafafa',
  transition: 'border .24s ease-in-out',
};

export const focusedStyle = {
  borderColor: '#2196f3',
};

export const acceptStyle = {
  borderColor: '#00e676',
};

export const rejectStyle = {
  borderColor: '#ff1744',
};

export const labelAndAction = style({
  display: 'flex',
  alignItems: 'center',
});
