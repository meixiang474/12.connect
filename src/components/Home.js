import React from 'react'
import {connect} from 'react-redux'
import actions from '../store/actions/home'
function Home (props) {
  console.log(props.match)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => props.go('/counter/1')}>跳到/counter</button>
    </div>
  )
}

export default connect(state => state, actions)(Home) 