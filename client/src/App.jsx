import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='app'>
      <div>navbar</div>
      <Outlet />
      <div>footer</div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>home</p>
      },
      {
        path: "/details/:platform",
        element: <p>details</p>
      },
      {
        path: "/leaderboard",
        element: <p>leaderboard</p>
      },
      {
        path: "/login",
        element: <p>login</p>
      },
    ]
  },
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App