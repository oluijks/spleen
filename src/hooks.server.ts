import { type Handle } from '@sveltejs/kit';
import { cyan, gray, yellow, bold } from 'kleur/colors';

import PocketBase from 'pocketbase';

export const handle: Handle = (async ({ event, resolve }) => {
  // * Note: https://kit.svelte.dev/docs/errors#responses
  console.log(
    gray(
      `${cyan(bold('[spleen]'))} ${yellow(`${handle.name}()`)} src/hooks.server.ts`
    )
  );

  event.locals.pb = new PocketBase('http://127.0.0.1:8090');

  return await resolve(event);
}) satisfies Handle;
