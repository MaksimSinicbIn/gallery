import { useState } from 'react'
import workInProgress from '@/common/assets/workInProgress.webm'

export const WorkInProgressPage = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <video autoPlay muted loop>
          <source src={workInProgress} type="video/webm" />
        </video>
      </div>
      <h1>Work is in progress...</h1>
      <div className="card">
        <button onClick={incrementCount}>try to click, buddy {count}</button>
      </div>
    </>
  )
}
