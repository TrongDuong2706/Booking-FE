import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Authenticate from './components/Authenticate'
import Home from './pages/Home/Home'

import HomeLayout from './layout/HomeLayout/HomeLayout'
import DefaultLayout from './layout/DefaultLayout'

import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import HotelDetail from './pages/HotelDetail'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import ThankYou from './pages/ThankYou/ThankYou'
import VnpayCallBack from './components/VnpayCallBack/VnpayCallBack'
import Messenger from './pages/Messenger'
import AdminDashBoard from './pages/Admin/AdminDashboard'
import AdminHotelList from './pages/Admin/AdminHotel/AdminHotelList'
import HotelList from './pages/HotelList'
import DefaultLayoutAdmin from './layout/DefaultLayoutAdmin'
import HotelAdd from './pages/Admin/AdminHotel/HotelAdd'
import AdminEditHotel from './pages/Admin/AdminHotel/AdminEditHotel'
import ListRoom from './pages/Admin/AdminRoom/AdminListRoom'
import AdminAddRoom from './pages/Admin/AdminRoom/AdminAddRoom'
import AdminEditRoom from './pages/Admin/AdminRoom/AdminEditRoom'
import AdminRoute from './components/AdminComponents/AdminRoute/AdminRoute'
import AdminListBooking from './pages/Admin/AdminBooking/AdminListBooking'
import AdminDetailBooking from './pages/Admin/AdminBooking/AdminDetailBooking'

export default function useRouteElements() {
  function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  }

  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }

  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/hotel-list',
      index: true,
      element: (
        <DefaultLayout>
          <HotelList />
        </DefaultLayout>
      )
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    },
    {
      path: '/payment/:roomId',
      element: <Payment />
    },
    {
      path: '/hotel-detail/:hotelId',
      element: (
        <DefaultLayout>
          <HotelDetail />
        </DefaultLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    },
    {
      path: '/authenticate',
      element: <Authenticate />
    },
    {
      path: '/vn-pay-callback',
      element: <VnpayCallBack />
    },
    {
      path: '/thank-you',
      element: <ThankYou />
    },
    {
      path: '/messenger',
      element: <Messenger />
    },

    {
      path: '/',
      element: <AdminRoute />, // Đảm bảo điều hướng đúng
      children: [
        {
          path: '/admin',
          element: (
            <DefaultLayoutAdmin>
              <AdminDashBoard />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/hotel-list',
          element: (
            <DefaultLayoutAdmin>
              <AdminHotelList />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/hotel-add',
          element: (
            <DefaultLayoutAdmin>
              <HotelAdd />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/hotel-edit/:hotelId',
          element: (
            <DefaultLayoutAdmin>
              <AdminEditHotel />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/room',
          element: (
            <DefaultLayoutAdmin>
              <ListRoom />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/room-add',
          element: (
            <DefaultLayoutAdmin>
              <AdminAddRoom />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/room-edit/:roomId',
          element: (
            <DefaultLayoutAdmin>
              <AdminEditRoom />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/bookings',
          element: (
            <DefaultLayoutAdmin>
              <AdminListBooking />
            </DefaultLayoutAdmin>
          )
        },
        {
          path: '/admin/booking-detail/:bookingId',
          element: (
            <DefaultLayoutAdmin>
              <AdminDetailBooking />
            </DefaultLayoutAdmin>
          )
        }
      ]
    }
  ])
  return routeElements
}
