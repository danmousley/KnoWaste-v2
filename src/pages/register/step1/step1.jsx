import React from 'react'
import styles from './step1.scss'

const Step1 = () => {
    return (
        <>
            <section class="container form">
                <div class="row">
                    <div class="col">
                        <h6>First Name</h6>
                        <input type="text" />
                    </div>
                    <div class="col">
                        <h6>Last Name</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Email Address</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Date of birth</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Mobile Number</h6>
                        <input type="text" />
                    </div>
                </div>
            </section>
            <div class="buttons">
                <button type="button" class="btn btn-primary">Next</button>
            </div>
        </>
    )
}

export default Step1;
