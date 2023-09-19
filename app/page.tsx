import Image from 'next/image'
import DashboardPage from './components/home/page'
import RegistrationPage from './components/Register/page'
import LoginPage from './components/Login/page'

export default function Home() {
  return (
    <main>
  <DashboardPage/>
  <RegistrationPage/>
  <LoginPage/>

    
    </main>
  )
}