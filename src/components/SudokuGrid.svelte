<script context="module" type="ts">

import { get } from 'svelte/store';

type Answer = [number, boolean];
export class DummyCell {
    // Given answer and whether it is valid
    contents: Writable<Answer | null>;

    // A record for each of the 9 candidates. If a candidate is added, returns boolean
    // for its validity, otherwise null to leave blank
    candidates: Record<number, Writable<boolean | null>>;

    constructor() {
        this.contents = writable(null);
        this.candidates = Array.from({length: 9}).map(() => writable(null));
    }

    toggleContents(n: number) {
    }

    toggleCandidate(selectedNumber: number) {
        const i = selectedNumber - 1;
        this.candidates[i].set(get(this.candidates[i]) === null ? true : null);
    }
}
</script>

<script type="ts">

import { Readable, Writable, writable } from 'svelte/store';
import SudokuGridCell from './SudokuGridCell.svelte';

export let selectedNumber: Readable<number>;

const cells = Array.from({length: 81}).map(() => new DummyCell())

</script>

<div class="SudokuGrid">
    {#each cells as cell, i}
        <!-- Forced to use a sub component here as stores need to be defined at component scope -->
        <SudokuGridCell cell={cell} selectedNumber={selectedNumber} />
    {/each}

    <style>
/**
 * Adding CSS in the DOM is the only reasonable way to define child classes
 * in the parent. It completely disables all the CSS scoping however.
 */
.SudokuGrid {
    --black: #090909;

    display: grid;
    grid-template-columns: repeat(9, 1fr);

    border: 3px solid var(--black);
}

.SudokuGrid .--Cell > div {
    flex: 1;
}

.SudokuGrid .--Cell.-ShowingCandidates .--Contents {
    display: none;
}

.SudokuGrid .--Candidates {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    line-height: 0px;
}

.SudokuGrid .--Cell.-ShowingContents .--Candidates {
    display: none;
}

.SudokuGrid .--Candidate {
    flex-basis: calc(100% / 3);
}

.SudokuGrid .--Cell {
    display: flex;
    align-items: center;

    text-align: center;
    border-right: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
}

.SudokuGrid .--Cell::before {
    content: "";
    padding-bottom: 100%;
    width: 0px;
}

.SudokuGrid .--Cell:nth-child(3n) {
    border-right: 2px solid var(--black);
}

.SudokuGrid .--Cell:nth-child(9n) {
    border-right: none;
}

.SudokuGrid .--Cell:nth-child(n + 19):nth-child(-n + 27) {
    border-bottom: 2px solid var(--black);
}

.SudokuGrid .--Cell:nth-child(n + 46):nth-child(-n + 54) {
    border-bottom: 2px solid var(--black);
}

.SudokuGrid .--Cell:nth-child(n + 73) {
    border-bottom: none;
}

    </style>

</div>
