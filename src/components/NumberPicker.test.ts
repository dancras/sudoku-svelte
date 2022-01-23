/**
 * @jest-environment jsdom
 */

 import { render, fireEvent, RenderResult } from '@testing-library/svelte';
 import { writable } from 'svelte/store';
 import NumberPicker from '$/components/NumberPicker.svelte';

 /**
  * An example test suite outlining the usage of
  * `describe()`, `beforeEach()`, `test()` and `expect()`
  *
  * @see https://jestjs.io/docs/getting-started
  * @see https://github.com/testing-library/jest-dom
  */

 describe('NumberPicker', () => {

    let renderedComponent: RenderResult;

    beforeEach(() => {
        renderedComponent = render(NumberPicker, {
            selected: writable(1)
        });
    });

    test('shows the numbers 1 to 9', () => {

        const numberElements = Array.from({ length: 9 }).map((x, i) => renderedComponent.getByText(i + 1));

        numberElements.forEach(el => {
            expect(el).toBeInTheDocument();
        });

    });

    test('updates the --selected css variable when an option is clicked', async function () {

        const option3 = renderedComponent.getByText(3);

        const selection = renderedComponent.getByTestId('number-picker-selection');

        expect(selection.getAttribute('style')).toContain('--selected: 1');

        await fireEvent.click(option3);

        expect(selection.getAttribute('style')).toContain('--selected: 3');

    });

 });
