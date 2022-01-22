import Index from '$/routes/index.svelte';
import { foo } from '$/lib/other';

export function identity<T>(x: T): T {
    console.log(foo());
    return x;
}
