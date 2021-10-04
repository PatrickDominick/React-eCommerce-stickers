import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormInput } from "../formFields";
import history from "../../history"

export default class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not Registered? Create account here",
                onClick: () => history.pushState("/signup")
            },
            {
                _id: 1,
                title: "Forgot account email?",
                onClick: () => console.log("Forgot email?")
            },
            {
                _id: 2,
                title: "Forgot password?",
                onClick: () => console.log("Hafa adai!")
            },
        ]
        return (
            <form className={`${className} sign-in-form`}>
                <Field className="sign-in-form__email" 
                name="email" 
                type="email" 
                title="Email" 
                placeholder="Email" 
                component={FormInput}/>
                <Field className="sign-in-form__password" 
                name="password" 
                type="password" 
                title="Password" 
                placeholder="Password" 
                component={FormInput}/>
                <Details className="sign-in-form_details" title="QuickLinks" link={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm)