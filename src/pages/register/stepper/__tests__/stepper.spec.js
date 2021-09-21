import React from "react";
import { render, screen } from "@testing-library/react";

import Stepper from "../stepper";

describe('Stepper', () => {

    test('Stepper component renders', () => {
        render(<Stepper />)
    })

    test('Stepper has correct styles on step 1', () => {
        render(<Stepper formStep={1}/>)

        expect(screen.getByTestId('stepper-step1')).toHaveClass('active');
        expect(screen.getByTestId('stepper-step2')).toHaveClass('default');
        expect(screen.getByTestId('stepper-step3')).toHaveClass('default');
    })

    test('Stepper has correct styles on step 2', () => {
        render(<Stepper formStep={2}/>)

        expect(screen.getByTestId('stepper-step1')).toHaveClass('complete');
        expect(screen.getByTestId('stepper-step2')).toHaveClass('active');
        expect(screen.getByTestId('stepper-step3')).toHaveClass('default');
    })

    test('Stepper has correct styles on step 3', () => {
        render(<Stepper formStep={3}/>)

        expect(screen.getByTestId('stepper-step1')).toHaveClass('complete');
        expect(screen.getByTestId('stepper-step2')).toHaveClass('complete');
        expect(screen.getByTestId('stepper-step3')).toHaveClass('active');
    })

})