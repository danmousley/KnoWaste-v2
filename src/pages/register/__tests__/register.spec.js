import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Register from "../register";

describe('Register', () => {


    test('Register component renders', () => {
        render(<Register />)
    })

    test('Check that the title for step 1 is rendered on page load', () => {
        render(<Register />)

        expect(screen.getByText("Let's get started...")).toBeInTheDocument();
    })

    test('Check that the form for step 1 is rendered on page load', () => {
        render(<Register />)

        expect(screen.getByText(/First/)).toBeInTheDocument();
    })

    test('check the next step button is initially disabled', () => {
        render(<Register />)

        expect(screen.getByRole('button', {name: /Next/i})).toBeDisabled();
    })

    test('check that inputting valid information causes the next button to become enabled', () => {
        render(<Register />)
        let inputs = screen.getAllByRole('textbox')
        let dateOfBirth = screen.getByLabelText('Date of birth')
        let firstName = inputs[0]
        let lastName = inputs[1]
        let email = inputs[2]
        let mob = inputs[3]

        userEvent.type(firstName, 'Dan');
        userEvent.type(lastName, 'Mousley');
        userEvent.type(email, 'Dan@hotmail.com');
        userEvent.type(mob, '0123456789');
        fireEvent.change(dateOfBirth, { target: { value: '1994-05-12' } });
        userEvent.click(screen.getByRole("banner"));

        expect(screen.getByRole('button', {name: /Next/i})).toBeEnabled();
    })

    test('check that step 2 loads after input of valid information and clicking next', async () => {
        render(<Register />)
        let inputs = screen.getAllByRole('textbox')
        let dateOfBirth = screen.getByLabelText('Date of birth')
        let firstName = inputs[0]
        let lastName = inputs[1]
        let email = inputs[2]
        let mob = inputs[3]

        userEvent.type(firstName, 'Dan');
        userEvent.type(lastName, 'Mousley');
        userEvent.type(email, 'Dan@hotmail.com');
        userEvent.type(mob, '0123456789');
        fireEvent.change(dateOfBirth, { target: { value: '1994-05-12' } });
        userEvent.click(screen.getByRole("banner"));

        userEvent.click(screen.getByRole('button', {name: /Next/i}));

        expect(await screen.findByText(/meet/i)).toBeInTheDocument();
        expect(await screen.findByText(/create password/i)).toBeInTheDocument();
    })

    test('Stepper has the correct styles', () => {
        screen.debug();
    })
})