import toast from 'react-hot-toast';
import { it, expect, vi } from 'vitest';

import { showToast } from './showToast';

vi.mock('react-hot-toast');

it('should correctly pass the message & icon to the toast', () => {
  const message = 'Successfully lorem ipsumed!';
  const icon = '🎉';

  showToast(message, icon);

  expect(toast).toHaveBeenCalledWith(message, {
    icon,
    position: 'bottom-right',
  });
});
