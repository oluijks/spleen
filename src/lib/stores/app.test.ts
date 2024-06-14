import { describe, it, expect } from 'vitest';

import { get } from 'svelte/store';
import { pageTitle, metaTitle } from './app';

describe('app store', () => {
  it('should derive metaTitle from pageTitle', async () => {
    pageTitle.set('Test Page');

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(get(metaTitle)).toBe('spleen :: Test Page');
  });
});
