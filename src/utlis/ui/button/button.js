import React from 'react'
import styles from './button.module.css'
import {Spinner} from '../'

export const Button = (props) => {

    let ButtonElement = null;
    let dynamicContainer = [styles.ButtonContainer]
    let dynamicElementStyle = [styles.ButtonElement]
    if (props.errorBoxRequired) {
        dynamicContainer.push(styles.ButtonContainerWithErrorMessage)
    }
    switch (props.buttonType) {
        case 'standard':
            ButtonElement = <button
                disabled={props.isDisabled}
                onClick={props.clicked}
                className={dynamicElementStyle.join(' ')}>
                {props.loading ? <Spinner /> : props.buttonName}</button>
            break;
        case 'standard-reverse':
            dynamicElementStyle.push(styles.ButtonElementReverse)
            ButtonElement = <button
                disabled={props.isDisabled}
                onClick={props.clicked}
                className={dynamicElementStyle.join(' ')}>
                {props.loading ? <Spinner /> : props.buttonName}</button>
            break;
        case 'submit':
            ButtonElement = <button
                disabled={props.isDisabled}
                className={dynamicElementStyle.join(' ')} >
                {props.loading ? <Spinner /> : props.buttonName}</button>
            break;
        case 'cancel':
            dynamicElementStyle.push(styles.ButtonElementCancel)
            ButtonElement = <button
                disabled={props.isDisabled}
                onClick={props.clicked}
                className={dynamicElementStyle.join(' ')}>
                {props.loading ? <Spinner /> : props.buttonName}</button>
            break;
        default:
            ButtonElement = <button
                disabled={props.isDisabled}
                onClick={props.clicked}
                className={dynamicElementStyle.join(' ')}>
                {props.loading ? <Spinner /> : props.buttonName}</button>
            break;
    }

    return (

        <div className={dynamicContainer.join(' ')}>
            {ButtonElement}
            {props.errorBoxRequired ? <p className={styles.ErrorMessage}>{props.errorMessage}</p> : null}
        </div>

    )
}

