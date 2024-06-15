import { PRIVATE_POCKET_BASE_URL } from '$env/static/private';
import { appName } from '$lib/config';
import { error, type Handle } from '@sveltejs/kit';
import { bold as b, cyan as c, gray as g, yellow as y } from 'kleur/colors';
import PocketBase, { ClientResponseError } from 'pocketbase';

export const handle: Handle = (async ({ event, resolve }) => {
  // * Note: https://kit.svelte.dev/docs/errors#responses
  console.log(
    g(`${c(b(`[${appName}]`))} ${y(`${handle.name}()`)} src/hooks.server.ts`)
  );

  event.locals.pb = new PocketBase(PRIVATE_POCKET_BASE_URL);

  await checkPocketBaseHealthStatus(event.locals.pb);

  return await resolve(event);
}) satisfies Handle;

// ----------------------------------------------------------------------------
// helper functions
// ----------------------------------------------------------------------------

const checkPocketBaseHealthStatus = async (pb: PocketBase) => {
  try {
    await pb.health.check();
  } catch (error) {
    if (error instanceof ClientResponseError) {
      handleClientResponseError(error);
    }
    throw new Error('PocketBase client not available');
  }
};

const handleClientResponseError = (health: ClientResponseError) => {
  const { status, message } = health;
  if (health.status === 0) {
    error(500, message);
  } else if (status >= 400 && status <= 599) {
    error(status, message);
  }
};
