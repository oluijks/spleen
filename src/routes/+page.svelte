<script lang="ts">
  import { appName } from '$lib/config';
  import { pageTitle } from '$lib/stores/app';

  $pageTitle = 'home';
</script>

<div class="container mx-auto flex h-full items-center justify-center">
  <div class="flex flex-col items-center space-y-10 text-center">
    <h1 class="h1">
      <span class="gradient-heading">welcome to {appName}</span>
    </h1>
  </div>
</div>
