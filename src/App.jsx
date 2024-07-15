import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './styles/App.css'
import routers from './routers'

const router = createBrowserRouter(routers)

const App = ()=>{
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
