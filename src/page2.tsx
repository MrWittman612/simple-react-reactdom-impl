import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

export default function Page2() {
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Page 2</h1> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <div className='btn-group'>
      <Link className='link' to={'/'}>Home</Link>
      <Link className='link' to={'/page3'}>Page 3</Link>
    </div>
    </div>
  )
}

