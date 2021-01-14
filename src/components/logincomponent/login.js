import React from 'react'
import {Input,Button} from '../../utlis/ui'
import styles from './login.module.css'

const Login = (props) => {
    let controls = props.controls.map(object => (
        <Input
            key={object.id}
            controlType={object.control.controlType}
            controlConfig={object.control.controlConfig}
            label={object.control.label}
            value={object.control.value}
            valid={object.control.valid}
            errorMessage={object.control.errorMessage}
            touched={object.control.touched}
            animateInput={object.control.animateInput}
            animateLabel={object.control.animateLabel}
            changed={(event) => props.changed(event, object.id)} />
    ))
    return (

        <div className={styles.LoginBox}>
            <form
                className={styles.InputFormFileds}
                onSubmit={props.login}>
                {controls}
                <Button
                    buttonType='submit'
                    isDisabled={props.isLoginDisabled}
                    loading={props.loading}
                    errorBoxRequired
                    errorMessage={props.error? props.error : ''}
                    buttonName='Login'
                />
            </form>
        </div>


    )
}

export default Login
