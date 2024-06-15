import { appName } from '$lib/config';
import { persisted } from 'svelte-persisted-store';
import type { Readable, Writable } from 'svelte/store';
import { derived, readable, writable } from 'svelte/store';

export const pageTitle: Writable<string> = writable('');
export const metaTitle: Readable<string> = derived(
  pageTitle,
  ($title) => `${appName} :: ${$title}`
);

export const sitePreferences = persisted('sitePreferences', {
  showClock: true,
});

export const dateTime = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});
