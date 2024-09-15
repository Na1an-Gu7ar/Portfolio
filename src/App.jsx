import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='mywork' element={<MyWork />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
