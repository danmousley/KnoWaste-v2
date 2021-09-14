import React from 'react';
import styles from './step2.scss';

const Step2 = (props) => {
    const {handleClick} = props;

    return (
        <>
        <form>
            <section class="container form">
                <div class="row form__row">
                    <div class="col">
                        <h6>Which Halls of Residence do you reside at?</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6>Student Number</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6>Create Password</h6>
                        <input type="text" />
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6>Confirm Password</h6>
                        <input type="text" />
                    </div>
                </div>
            </section>
            <div class="buttons container">
                <div class="row h-100">
                    <div class="col my-auto">
                        <button type="button" onClick={e => handleClick(e)} class="btn btn-secondary button--form" value={2} >Previous</button>
                        <button type="button" onClick={e => handleClick(e)} class="btn btn-primary button--form" value={2} >Next</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Step2;
