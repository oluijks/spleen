<script>
  import { page } from '$app/stores';
  import { pageTitle } from '$lib/stores/app';

  import '../../app.postcss';

  $pageTitle = `${$page.status} - ${$page.error?.message.toLocaleLowerCase()}`;
</script>

<div class="container mx-auto flex h-full justify-center md:items-center">
  <div class="flex w-full flex-col space-y-10 text-center md:items-center">
    <div class="card flex h-full w-full flex-col gap-4 p-4 md:p-32">
      <header class="card-header">
        <h1 class="h1 text-9xl">
          <span class="gradient-heading">{$page.status}</span>
        </h1>
      </header>
      <section class="p-4">
        <p class="text-4xl text-surface-400">
          {$page.error?.message.toLocaleLowerCase()}
        </p>
      </section>
      <footer class="card-footer flex flex-col items-center gap-1 pt-4">
        <a href="/" class="variant-filled-primary btn w-full md:w-80">
          go home
        </a>
        <p
          class="ml-2 mt-2 text-balance text-left text-sm text-surface-400 md:max-w-80"
        >
          if you see this page more then usually please contact us, there must
          be something wrong and we would like to fix the problem...
        </p>
      </footer>
    </div>
  </div>
</div>
