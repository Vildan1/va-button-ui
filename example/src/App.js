import React from 'react'

import { Button } from 'va-button-ui'
import 'va-button-ui/dist/index.css'
const App = () => {
  return (
    <div className='main'>
    <Button type='primary' text="Click Me" onClick = {() => alert("PRIMARY")} /> <br />
    <Button type='danger' text="Click Me" onClick = {() => alert("DANGER")} /> <br />
    <Button type='dashed' text="Click Me" onClick = {() => alert("DASHED")} /> <br />
    <Button type='warning' text="Click Me" onClick = {() => alert("WARNING")} /> <br />
    <Button type='text' text="Click Me" onClick = {() => alert("TEXT")} /> <br />
    <Button type='link' text="Click Me" onClick = {() => alert("LINK")} /> <br />


    </div>
  )
}

export default App