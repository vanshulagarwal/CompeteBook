import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
const Layout = () => {
  return (
    <div className='app'>
      {/* <div>navbar</div> */}
      <Outlet />
      <Footer />
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
        element: <Home />
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
        element: <Login />
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