import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Step2 from "../step2";

describe('Step 2', () => {

    test('Step 2 component renders', () => {
        render(<Step2 />)
    })

    test('Inputs are valid on correct input', () => {
        render(<Step2 checkFormIsValid={jest.fn} />)
        let halls = screen.getByRole('combobox')
        let studentNo = screen.getByRole('spinbutton')
        userEvent.type(studentNo, "123456")
        userEvent.selectOptions(halls, screen.getByRole('option', {name: "Halls 2"}))
        // userEvent.type(firstName, 'Dan');
        // userEvent.click(inputs[1]);
        userEvent.click(studentNo);
        expect(halls).toBeValid();
        expect(studentNo).toBeValid();
    })

    test('Inputs are invalid on incorrect input', () => {
        render(<Step2 checkFormIsValid={jest.fn} />)
        let halls = screen.getByRole('combobox')
        let studentNo = screen.getByRole('spinbutton')
        userEvent.type(studentNo, "")
        // userEvent.type(firstName, 'Dan');
        // userEvent.click(inputs[1]);
        userEvent.click(halls);
        expect(studentNo).toBeInvalid();
    })

    // test('Inputs are invalid on incorrect input', () => {
    //     render(<Step2 checkFormIsValid={jest.fn} />)
    //     let inputs = screen.getAllByRole('textbox')
    //     let firstName = inputs[0]
    //     userEvent.type(firstName, '@123');
    //     userEvent.click(inputs[1]);
    //     userEvent.click(firstName);
    //     expect(firstName).toBeInvalid();
    // })

})