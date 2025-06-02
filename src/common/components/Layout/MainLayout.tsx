import { Outlet, useLocation } from 'react-router'
import { Header } from '../Header/Header'
import { PATH } from '@/common/routes/AppRouter'
import clsx from 'clsx'

export const MainLayout = () => {
  const location = useLocation()

  const isErrorPage = location.pathname === PATH.NOT_FOUND

  return (
    <>
      <Header />
      <div className={clsx(!isErrorPage && 'container', 'withHeader')}>
        <Outlet />
      </div>
    </>
  )
}
