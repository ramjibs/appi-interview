import React, { Component } from 'react'
import Login from './login'
import styles from './logincontainer.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'
import checkValidityHandler from '../../utlis/validators/formvalidator'

class LoginContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            controls: {
                userId: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'userid',
                        id: 'userid',
                        placeholder: 'your email id',
                        disabled: false
                    },
                    label: 'Email ID',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                    },

                },
                password: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'password',
                        name: 'password',
                        id: 'password',
                        placeholder: 'your password',
                        disabled: false
                    },
                    label: 'Password',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 8
                    },
                   

                },

            }
        }

    }

    componentDidUpdate() {

        if (this.props.token) {

            if (this.props.location.state) {
                this.props.history.replace(this.props.location.state.from.pathname)
            }
            else {
                this.props.history.replace('/dashboard')
            }

        }

    }


    valueChangeHandler = (event, key) => {

        event.preventDefault();
        let updatedControls = {
            ...this.state.controls
        }
        let control = updatedControls[key]
        control.value = event.target.value
        control.touched = true
        const validtityResult = checkValidityHandler(control.validation, control.value)
        control.valid = validtityResult.isValid
        control.errorMessage = validtityResult.errorMessage

        updatedControls[key] = control

        this.setState({
            controls: updatedControls
        })

    }

    loginHandler = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.controls.userId.value, this.state.controls.password.value)

    }

    render() {

        let controls = []
        let isLoginDisabled = true
        for (let key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })
            isLoginDisabled = this.state.controls[key].valid && isLoginDisabled


        }


        return (

            <div className={styles.LoginContainer}>
                <h5 className={styles.Title}>login</h5>
                <Login
                    controls={controls}
                    changed={this.valueChangeHandler}
                    login={this.loginHandler}
                    isLoginDisabled={!isLoginDisabled}
                    loading={this.props.loading}
                    error={this.props.error}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        error: state.login.error,
        token: state.login.token,
    }
}




const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userid, password) => dispatch(actionCreators.login(userid, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
