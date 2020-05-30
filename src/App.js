import React from 'react'
import DataFetching from './components/DataFetching'
import { HookCounter } from './components/HookCounter'
import { HookCounterObject } from './components/HookCounterObject'
import HookCounterArray from './components/HookCounterArray'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'

const App = () => {
  return (
    <>
      <DataFetching />
      <HookCounter />
      <br></br>
      <HookCounterObject />
      <br></br>
      <HookCounterArray />
      <br></br>
      <HookCounterOne />
      <br></br>
      <HookMouse />
    </>

  )
}

export default App
