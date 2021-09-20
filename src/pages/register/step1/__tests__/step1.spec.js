import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Step1 from "../step1";

describe('Step 1', () => {

    test('Step 1 component renders', () => {
        render(<Step1 />)

        screen.debug();
    })

    // test('Form validation', () => {


    //     border-color: #198754
    // })
    // test('CheckFormIsValid runs when input blurred', async () => {
    //     const onBlur = jest.fn();
    //     render(<Step1 onBlur={onBlur} />)
    //     let inputs = screen.getAllByRole('textbox')
    //     let firstName = inputs[0]

    //     userEvent.click(firstName);
    //     userEvent.click(inputs[1]);

    //     expect(onBlur).toHaveBeenCalled();

    // })

})