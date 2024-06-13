import { derived, readable, writable } from 'svelte/store';

export const pageTitle = writable('');
export const metaTitle = derived(pageTitle, ($title) => `spleen :: ${$title}`);

export const dateTime = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
