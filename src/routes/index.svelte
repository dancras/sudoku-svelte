<script lang="ts">
    import { identity } from '$/lib/example';
    type OnlyLOL = 'LOL';

    const response: OnlyLOL = identity('LOL');
</script>

<h1>Welcome to SvelteKitaa {response}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
