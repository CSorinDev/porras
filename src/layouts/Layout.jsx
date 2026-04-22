import { Outlet } from 'react-router'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='mt-20 p-4'>
        <Outlet />
      </main>
    </>
  )
}
