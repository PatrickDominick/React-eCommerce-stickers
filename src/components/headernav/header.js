import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="header">
                <img src="http://via.placeholder.com/50x50" alt="header area" />
            </div>
        )
    }
}