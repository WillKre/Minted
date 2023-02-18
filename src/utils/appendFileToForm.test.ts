import { expect, it } from 'vitest';

import { appendFileToForm } from './appendFileToForm';

it('should append a file to a form', () => {
  const file = new File([new ArrayBuffer(1)], 'mock-image.png');
  const form = appendFileToForm(file);

  expect(form.get('file')).toEqual(file);
  expect(form.get('file')).toBeInstanceOf(File);
});
