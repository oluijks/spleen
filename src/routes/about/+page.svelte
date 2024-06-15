<script lang="ts">
  import { appName } from '$lib/config';
  import { pageTitle } from '$lib/stores/app';

  $pageTitle = 'about';
</script>

<div class="container mx-auto flex h-full items-center justify-center">
  <div class="flex flex-col items-center space-y-10 text-center">
    <h1 class="h1">
      <span class="gradient-heading">about {appName}</span>
    </h1>
  </div>
</div>
