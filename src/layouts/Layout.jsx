import { Outlet } from 'react-router'
import Header from './Header'
import { useEffect } from 'react'
import HttpService from '../services/HttpService'

export default function Layout() {
  useEffect(() => {
    // Inicializamos las cookies de seguridad (CSRF) al cargar la app
    HttpService.get('/health')
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

