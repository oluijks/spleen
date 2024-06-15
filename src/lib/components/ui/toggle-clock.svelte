<script lang="ts">
  import { sitePreferences } from '$lib/stores/app';
  import { SlideToggle } from '@skeletonlabs/skeleton';

  let showClockChecked = $sitePreferences.showClock;
  $: showClockLabel = showClockChecked ? 'Hide Clock' : 'Show Clock';

  const handleToggleShowClock = () => {
    sitePreferences.update((p) => ({ ...p, showClock: !p.showClock }));
  };
</script>

<!--
@component
ToggleClock

A toggle switch to show/hide the clock

Usage:
  ```tsx 
  <ToggleClock /> 
  ```
-->

<SlideToggle
  size="sm"
  active="bg-primary-500"
  bind:checked={showClockChecked}
  name="slidetoggle-show-clock"
  on:change={handleToggleShowClock}
>
  {showClockLabel}
</SlideToggle>
