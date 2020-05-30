import React from 'react'
import DataFetching from './components/DataFetching'
import { HookCounter } from './components/HookCounter'
import { HookCounterObject } from './components/HookCounterObject'
import HookCounterArray from './components/HookCounterArray'

const App = () => {
  return (
    <>
      <DataFetching />
      <HookCounter />
      <br></br>
      <HookCounterObject />
      <br></br>
      <HookCounterArray />
    </>

  )
}

export default App
