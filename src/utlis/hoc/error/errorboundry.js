import React, { Component } from 'react'
import crash from '../../asset/crash.png'
import styles from './errorboundry.module.css'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidMount () {
        this.img = new Image()
        this.img.src = crash
        
    }
    componentDidCatch(error, errorInfo) {

        // Catch errors in any components below and re-render with error message
        this.setState({
            hasError: true
        })  
       
        // You can also log error messages to an error reporting service here
    }
    componentWillUnmount () {
        this.setState({
            hasError: false
        })
        // this.hasError = false
       
    }
    render() {

        if (this.state.hasError) {
            return (
                <div className={styles.Crash}>
                    <img src={this.img.src} alt ='App crashed'/>
                    <p> Oops Something went wrong ! <br/> Need Support From Developer</p>
                </div>
            )
        }

        return  this.props.children 
    }
}

