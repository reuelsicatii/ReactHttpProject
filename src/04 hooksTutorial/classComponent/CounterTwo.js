import React, { Component } from 'react'

export class CounterTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = (incrementNumber) => {
        this.setState(prevState => {
            return { count: prevState.count + incrementNumber }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default CounterTwo
