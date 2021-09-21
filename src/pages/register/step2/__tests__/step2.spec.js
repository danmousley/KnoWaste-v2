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
        let createPassword = screen.getByLabelText('Create Password')
        let confirmPassword = screen.getByLabelText('Confirm Password')
        userEvent.type(studentNo, "123456")
        userEvent.selectOptions(halls, screen.getByRole('option', {name: "Halls 2"}))
        userEvent.type(createPassword, "password123")
        userEvent.type(confirmPassword, "password123")

        expect(halls).toBeValid();
        expect(studentNo).toBeValid();
        expect(createPassword).toBeValid();
        expect(confirmPassword).toBeValid();
    })

    test('Inputs are invalid on incorrect input', () => {
        
        render(<Step2 checkFormIsValid={jest.fn} />)
        let studentNo = screen.getByRole('spinbutton')
        let createPassword = screen.getByLabelText('Create Password')
        let confirmPassword = screen.getByLabelText('Confirm Password')
        userEvent.type(studentNo, "")
        userEvent.type(createPassword, "")
        userEvent.type(confirmPassword, "")

        expect(studentNo).toBeInvalid();
        expect(createPassword).toBeInvalid();
        expect(confirmPassword).toBeInvalid();
    })

})