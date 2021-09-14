import React from 'react';
import styles from './stepper.scss';

const Stepper = (props) => {
    const {formStep} = props;
    const step1Styles = formStep === 1 ? "activeStep" : "inactiveStep";
    const step2Styles = formStep === 2 ? "activeStep" : "inactiveStep";
    const step3Styles = formStep === 3 ? "activeStep" : "inactiveStep";

    return (
        <nav class="container h-100">
            <div class="row h-100">
                <div className={`col step ${step1Styles}`} >
                    <h5 class="step-number">STEP 01</h5>
                    <span class="step-name">Personal Details</span>
                </div>
                <div className={`col step ${step2Styles}`} >
                    <h5 class="step-number">STEP 02</h5>
                    <span class="step-name">User Details</span>
                </div>
                <div className={`col step ${step3Styles}`} >
                    <h5 class="step-number">STEP 03</h5>
                    <span class="step-name">Terms & Conditions</span>
                </div>
            </div>
        </nav>
    )
}

export default Stepper;
