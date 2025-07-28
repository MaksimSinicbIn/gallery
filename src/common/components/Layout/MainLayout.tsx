import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className='appContainer'>
      <Outlet />
    </div>
  )
}
