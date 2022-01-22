import { identity } from '$/lib/example';
import Index from '$/routes/index.svelte';

test('identity returns passed value', () => {
    console.log(Index);
    expect(identity(true)).toBe(true);
});
