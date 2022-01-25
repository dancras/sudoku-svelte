<script lang="ts">
    import { writable } from 'svelte/store';
    import NumberPicker from '$/components/NumberPicker.svelte';
    import SudokuGrid from '$/components/SudokuGrid.svelte';

    const selectedNumber = writable(1);
</script>

<SudokuGrid selectedNumber={selectedNumber} />
<NumberPicker selected={selectedNumber} />
<div><a href="/">Go back</a></div>

