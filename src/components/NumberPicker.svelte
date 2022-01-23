<script lang="ts">

    import type { Writable } from 'svelte/store';

    const POSSIBLE_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    export let selected: Writable<number>;

</script>

<div class="NumberPicker">
    <div style="--selected: {$selected}" class="--Selection" data-testid="number-picker-selection"></div>
    <ul class="--Values">
        {#each POSSIBLE_VALUES as value}
            <li on:click={() => selected.set(value)} style="--value: {value}">{value}</li>
        {/each}
    </ul>
</div>

<style>

.NumberPicker {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
}
.NumberPicker .--Values {
    grid-row: 1;
    grid-column: 1;
    display: contents;
}
.NumberPicker .--Values li {
    grid-row: 1;
    text-align: center;
    grid-column: var(--value) / var(--value);
}
.NumberPicker .--Selection {
    grid-row: 1;
    grid-column: 1 / -1;
}
.NumberPicker .--Selection:before {
    --cell-width: 100% / 9;
    content: "";
    display: block;
    width: calc(var(--cell-width));
    margin-left: calc(var(--cell-width) * (var(--selected) - 1));
    transition: margin 700ms;
    height: 100%;
    background-color: aqua;
    border-radius: 5px;
}

</style>
