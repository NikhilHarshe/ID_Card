import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar (1)'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cards from './components/Cards (1)'
import Card from './components/Card'
import Forms from './components/Forms'
import PrivateRouts from "./components/auth/PrivateRouts"
import FormsFilds from './components/FormsFilds'
import Secondform from './components/Secondform'
import Admin from './pages/Admin'
// import IdCard from './pages/IdCard'
import IdCardJDVertical from './pages/IdCardJDVertical'
import IdCardJDHorizontal from './pages/IdCardJDHorizontal'
import Templates from './pages/Templates'

function App() {

  return (
    <div className=' bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={
          <PrivateRouts>
            <Card/>
          </PrivateRouts>
        } />
        <Route path='/template' element={
          <PrivateRouts>
            <Cards />
          </PrivateRouts>
        } />
        <Route path='/forms' element={
          <PrivateRouts>
            <FormsFilds />
          </PrivateRouts>
        } />
        <Route path='/detailsform/:fieldsId/:role' element={
          // <PrivateRouts>
            <Secondform />
          // </PrivateRouts>
        } />
        <Route path='/admin' element={
          <PrivateRouts>
            <Admin />
          </PrivateRouts>
        } />
        <Route path='/IdCardV' element={
          <PrivateRouts>
            <IdCardJDVertical />
          </PrivateRouts>
        } />
        <Route path='/IdCardH' element={
          <PrivateRouts>
            <IdCardJDHorizontal />
          </PrivateRouts>
        } />
        <Route path='/allTemplates' element={
          <PrivateRouts>
            <Templates />
          </PrivateRouts>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
