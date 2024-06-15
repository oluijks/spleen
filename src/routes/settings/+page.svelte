<script lang="ts">
  import { pageTitle } from '$lib/stores/app';

  import ToggleClock from '$lib/components/ui/toggle-clock.svelte';

  $pageTitle = 'site settings';
</script>

<ToggleClock />
