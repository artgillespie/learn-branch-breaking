import React from 'react'
import ComponentThree from './ComponentThree'
import './componentTwo.css'

const ComponentTwo = props =>
  <li className="componentTwo">
    Component Two <ComponentThree />
  </li>

export default ComponentTwo
