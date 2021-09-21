import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Step3 from "../step3";

describe('Step 3', () => {

    test('Step 3 component renders', () => {
        render(<Step3 />)
    })

    test('Terms are valid on select', () => {
        render(<Step3 checkFormIsValid={jest.fn}/>)

        const checkboxes = screen.getAllByRole('checkbox');
        const terms = checkboxes[0];
        const optIn = checkboxes[1];

        userEvent.click(terms);
        expect(optIn).toBeValid();
        expect(terms).toBeValid();
    })

    test('Terms are invalid on deselect', () => {
        render(<Step3 checkFormIsValid={jest.fn}/>)

        const checkboxes = screen.getAllByRole('checkbox');
        const terms = checkboxes[0];
        const optIn = checkboxes[1];

        userEvent.click(terms);
        expect(terms).toBeValid();

        userEvent.click(terms);
        expect(terms).toBeInvalid();
    })

})