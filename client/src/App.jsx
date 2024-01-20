import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Login from './Pages/login/Login'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import SetUsername from './Pages/SetUsername/SetUsername'
// import Leaderboard from './Pages/Leaderboard/Leaderboard'
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
      // {
      //   path: "/leaderboard",
      //   element: <Leaderboard />
      // },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/setusernames",
        element: <SetUsername />
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