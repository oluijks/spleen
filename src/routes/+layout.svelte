<script lang="ts">
  import { onMount } from 'svelte';

  import '../app.postcss';
  import { appDescription, appName } from '$lib/config';
  import { dateTime, metaTitle, sitePreferences } from '$lib/stores/app';

  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import { initializeStores, Toast } from '@skeletonlabs/skeleton';
  initializeStores();

  // Highlight JS
  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/github-dark.css';
  import { storeHighlightJs } from '@skeletonlabs/skeleton';
  import xml from 'highlight.js/lib/languages/xml'; // for HTML
  import css from 'highlight.js/lib/languages/css';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  hljs.registerLanguage('xml', xml); // for HTML
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  storeHighlightJs.set(hljs);

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  const detectSWUpdate = async () => {
    const registration = await navigator.serviceWorker.ready;
    registration.addEventListener('updatefound', () => {
      const newSW = registration.installing;
      newSW?.addEventListener('statechange', () => {
        if (newSW.state === 'installed') {
          const update = confirm('New version available. Reload to update?');
          if (update) {
            newSW.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
          }
        }
      });
    });
  };

  onMount(() => {
    if ('serviceWorker' in navigator) {
      detectSWUpdate();
    }
  });
</script>

<svelte:head>
  <title>{$metaTitle}</title>
  <meta name="description" content={appDescription} />
</svelte:head>

<Toast position="br" />

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/">
          <span class="h3 tracking-wider">{appName}</span>
        </a>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="variant-ghost-surface btn btn-sm"
          href="https://github.com/oluijks/spleen"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="footer">
    {#if $sitePreferences.showClock}
      <span class="text-sm tabular-nums">
        {$dateTime.toLocaleString()}
      </span>
    {/if}
  </svelte:fragment>
</AppShell>
