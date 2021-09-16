import React from 'react';
import './stepper.scss';

const Stepper = (props) => {
    const {formStep, handleStepper} = props;

    const stepStyles = (step) => {
        if (formStep < step) {
            return "default"
        } else if (formStep === step) {
            return "active"
        } else if (formStep > step) {
            return "complete"
        }
    }

    return (
        <nav class="container stepper h-100">
            <div class="row stepper__row h-100">
                <div className={`col step ${stepStyles(1)}`} >
                    <button value={1} type="button" onClick={(e) => handleStepper(e, 1)} class="stepper__button">
                        <h5 class="step-number">STEP 01</h5>
                        <span class="step-name">Personal Details</span>
                    </button>
                </div>
                <div className={`col step ${stepStyles(2)}`} >
                    <button value={2} onClick={(e) => handleStepper(e, 2)} class="stepper__button">
                        <h5 class="step-number">STEP 02</h5>
                        <span class="step-name">User Details</span>
                    </button>
                </div>
                <div className={`col step ${stepStyles(3)}`} >
                    <button value={3} onClick={(e) => handleStepper(e, 3)} class="stepper__button">
                        <h5 class="step-number">STEP 03</h5>
                        <span class="step-name">Terms & Conditions</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Stepper;
