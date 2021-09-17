import React from 'react';
import './requestsubmitted.scss';

const RequestSubmitted = (props) => {
    const { handlePrevious, handleLogin } = props;

    return (
            <section class="container request-submitted">
            <div class="row request-submitted__row">
                    <div class="col">
                        <p class="request-submitted__confirmation">
                            We've sent you an email with a link to update your password.
                            Please check your inbox.
                        </p>
                    </div>
                </div>
                <div class="request-submitted-buttons container">
                    <div class="row h-100">
                        <div class="col my-auto p-0">
                            <button type="button" onClick={ handlePrevious } class="btn btn-secondary button--forgot-password-form" >Previous</button>
                            <button type="submit" onClick={ handleLogin } class="btn btn-primary button--forgot-password-form" >Login</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default RequestSubmitted;

