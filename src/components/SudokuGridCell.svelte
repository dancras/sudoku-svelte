<script type="ts">
import type { Readable } from 'svelte/store';
import type { DummyCell } from './SudokuGrid.svelte';
import SudokuGridCandidate from './SudokuGridCandidate.svelte';

export let cell: DummyCell;
export let selectedNumber: Readable<number>;

const contents = cell.contents;

</script>

<div class="--Cell"
     class:-ShowingCandidates={!$contents}
     class:-ShowingContents={!!$contents}
     on:click={() => cell.toggleCandidate($selectedNumber)}
     on:dblclick={() => $contents = [$selectedNumber, true]}
>
    <div class="--Candidates">
        {#each Array.from({length: 9}) as empty, i}
            <SudokuGridCandidate candidate={cell.candidates[i]} i={i} />
        {/each}
    </div>
    <div class="--Contents">
        {$contents ? $contents[0] : ''}
    </div>
</div>
