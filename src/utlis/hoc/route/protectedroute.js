import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Loader } from '../../ui'
export function ProctectedRoute({ component: Component, authToken, authLoading, authStatus, ...rest }) {
    return (
        <Route
            {...rest}
            render={(routerProps) => authStatus === 'Unauthorized' && !authLoading ?
                <Redirect to={{ pathname: '/', state: { from: routerProps.location } }} /> : authToken && !authLoading ?
                    <Component {...routerProps} /> : <Loader />}
        />
    )
}
