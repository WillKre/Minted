import toast from 'react-hot-toast';

export function showToast(message: string, icon?: string) {
  toast(message, {
    icon,
    position: 'bottom-right',
  });
}
