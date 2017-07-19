import React from 'react'
import ComponentTwo from './ComponentTwo'
import './componentOne.css'

const ComponentOne = props =>
  <div>
    <h1>Component One</h1>
    <ul>
      <ComponentTwo key={0} />
      <ComponentTwo key={1} />
      <ComponentTwo key={2} />
    </ul>
  </div>

export default ComponentOne
