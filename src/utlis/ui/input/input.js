import React from 'react'
import styles from './input.module.css'

export const Input = (props) => {

    let inputElement = null;
    let dynamicStyles = [styles.InputElement]
    if (props.touched && !props.valid) {
        dynamicStyles.push(styles.InValidInputElement)
    }

    switch (props.controlType) {
        case 'input':
            inputElement = <div className={dynamicStyles.join(' ')}>
                <input
                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed} />
            </div>
            break;
        case 'textarea':
            inputElement = <div className={dynamicStyles.join(' ')} >
                <textarea

                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            </div>
            break;
        default:
            inputElement = <div className={styles.InputElement}>
                <input />
            </div>
            break;
    }

    return (
        <div>
            <div className={styles.Label}>
                <label
                    htmlFor={props.controlConfig.id}
                >{props.label}</label></div>
            {inputElement}
            <div className={styles.ErrorMessage}>
                <p> {props.errorMessage}</p>
            </div>
        </div>
    )
}

