<script type="ts">
import type { Writable } from 'svelte/store';

export let candidate: Writable<boolean | null>;
export let i: number;

</script>

<div class="--Candidate">{ $candidate === null ? ' ' : i + 1 }</div>
