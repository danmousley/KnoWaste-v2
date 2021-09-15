import React from 'react';
import styles from './stepper.scss';

const Stepper = (props) => {
    const {formStep} = props;

    const step1Styles = () => {
        if (formStep === 1) {
            return "active"
        } else {
            return "complete"
        }
    }
    
    const step2Styles = () => {
        if (formStep === 1) {
            return "default"
        } else if (formStep === 2) {
            return "active"
        } else {
            return "complete"
        }
    }

    const step3Styles = () => {
        if (formStep === 1) {
            return "default"
        } else if (formStep === 2) {
            return "default"
        } else {
            return "active"
        }
    }

    
    return (
        <nav class="container stepper h-100">
            <div class="row stepper__row h-100">
                <div className={`col step ${step1Styles()}`} >
                    <h5 class="step-number">STEP 01</h5>
                    <span class="step-name">Personal Details</span>
                </div>
                <div className={`col step ${step2Styles()}`} >
                    <h5 class="step-number">STEP 02</h5>
                    <span class="step-name">User Details</span>
                </div>
                <div className={`col step ${step3Styles()}`} >
                    <h5 class="step-number">STEP 03</h5>
                    <span class="step-name">Terms & Conditions</span>
                </div>
            </div>
        </nav>
    )
}

export default Stepper;
