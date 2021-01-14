import React, { Suspense } from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { ErrorBoundry } from './utlis/hoc'
import LoginContainer from './components/logincomponent/logincontainer'
import  Dashboard  from './components/dashboardcomponent/dashboard'
import { Loader } from './utlis/ui'
import { ProctectedRoute } from './utlis/hoc'
import { connect } from 'react-redux'


function App(props) {
  return (
    <ErrorBoundry>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/login' exact component={LoginContainer}></Route>
          <ProctectedRoute
            component={Dashboard}
            authStatus={props.authStatus}
            authLoading={props.loading}
            authToken={props.token}
            path='/dashboard'
          />
          <Redirect path='/' to ='/login'></Redirect>
        </Switch>
      </Suspense>
    </ErrorBoundry>
  );
}

const mapStateToProps = state => {
  return {
    token: state.login.token,
    loading: state.login.loading,
    error: state.login.error,
    authStatus: state.login.authStatus
  }

}
export default connect(mapStateToProps)(App);
