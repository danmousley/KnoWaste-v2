import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Step1 from "../step1";

describe('Step 1', () => {

    test('Step 1 component renders', () => {
        render(<Step1 />)

        screen.debug();
    })

    test('Inputs are valid on correct input', () => {
        render(<Step1 checkFormIsValid={jest.fn} />)
        let inputs = screen.getAllByRole('textbox')
        let firstName = inputs[0]
        userEvent.type(firstName, 'Dan');
        userEvent.click(inputs[1]);
        userEvent.click(firstName);
        expect(firstName).toBeValid();
    })

    test('Inputs are invalid on incorrect input', () => {
        render(<Step1 checkFormIsValid={jest.fn} />)
        let inputs = screen.getAllByRole('textbox')
        let firstName = inputs[0]
        userEvent.type(firstName, '@123');
        userEvent.click(inputs[1]);
        userEvent.click(firstName);
        expect(firstName).toBeInvalid();
    })

})