<script>
  import { pageTitle } from '$lib/stores/app';
  import { page } from '$app/stores';

  import '../app.postcss';

  $pageTitle = `${$page.status} - ${$page.error?.message.toLocaleLowerCase()}`;
</script>

<div class="container mx-auto flex h-full justify-center md:items-center">
  <div class="flex w-full flex-col space-y-10 text-center md:items-center">
    <div class="card flex h-full w-full flex-col gap-4 p-4 md:p-32">
      <header class="card-header">
        <h1 class="h1 text-9xl">
          <span class="gradient-heading">{$page.status} yo</span>
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
      </footer>
    </div>
  </div>
</div>
