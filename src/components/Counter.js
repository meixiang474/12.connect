import React from 'react'

export default function (props) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => props.history.go(-1)}>回退到Home</button>
    </div>
  )
}