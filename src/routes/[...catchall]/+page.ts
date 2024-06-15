import { error, type Load } from '@sveltejs/kit';

export const load: Load = (async () => {
  error(404, 'page not found');
}) satisfies Load;
