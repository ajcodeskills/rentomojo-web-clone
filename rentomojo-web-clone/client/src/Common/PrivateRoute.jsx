import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    redirectPath="/login",
    push= false,
    path,
    children,
    exact = false

}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    //console.log(isAuth)

    return isAuth ? (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    ) : (
        <Redirect to={redirectPath} push={push} />
    )
}
