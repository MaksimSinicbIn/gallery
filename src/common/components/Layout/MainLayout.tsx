import { Outlet, useLocation } from 'react-router'
import { PATH } from '@/common/routes/AppRouter'
import clsx from 'clsx'

export const MainLayout = () => {
  const location = useLocation()

  const isErrorPage = location.pathname === PATH.NOT_FOUND

  return (
    <div className={clsx(!isErrorPage && 'appContainer', 'withHeader')}>
      <Outlet />
    </div>
  )
}
