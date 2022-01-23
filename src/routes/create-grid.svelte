<script lang="ts">
    import { writable } from 'svelte/store';
    import NumberPicker from '$/components/NumberPicker.svelte';

    const selectedNumber = writable(1);
</script>

<div>Grid will affect {$selectedNumber}</div>
<div><a href="/">Go back</a></div>
<NumberPicker selected={selectedNumber} />
