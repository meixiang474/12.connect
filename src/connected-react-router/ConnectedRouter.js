import React, { useEffect, useContext } from 'react'
import {Router} from 'react-router'
import {LOACTION_CHANGE} from './types'
import {ReactReduxContext} from 'react-redux'
export default function (props) {
  let {store} = useContext(ReactReduxContext)
  useEffect(() => {
    return props.history.listen((location, action) => {
      store.dispatch({
        type: LOACTION_CHANGE,
        payload: {
          location, action
        }
      })
    })
  }, [props.history, store])
  return (
    <Router history={props.history}>
      {props.children}
    </Router>
  )
}