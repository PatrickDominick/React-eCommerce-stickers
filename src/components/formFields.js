import React, { Component } from 'react'

export class FormInput extends Component {
    
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label htmlFor="" className="form-input__label">{title}</label>
                <input type="text" className="form-input__input" placeholder={placeholder} {...input}/>
            </div>
        )
    }
}