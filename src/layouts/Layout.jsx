import { Outlet } from 'react-router'
import Header from './Header'
import { useEffect } from 'react'

export default function Layout() {
  useEffect(() => {
    // Inicializamos las cookies de seguridad (CSRF) al cargar la app
    fetch('http://localhost:3000/api/health', { credentials: 'include' })
  }, [])

  return (
    <>
      <Header />
      <main className='mt-20 p-4'>
        <Outlet />
      </main>
    </>
  )
}
