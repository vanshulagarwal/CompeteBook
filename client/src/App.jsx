import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import SetUsername from './Pages/SetUsername/SetUsername'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar/Navbar'
import Details from './Pages/Details/Details'

// import Leaderboard from './Pages/Leaderboard/Leaderboard'
const Layout = () => {
  return (
    <div className='app'>
      <ToastContainer autoClose={3000} draggablePercent={50} limit={3} />
      <Navbar />
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
        element: <Details/>
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