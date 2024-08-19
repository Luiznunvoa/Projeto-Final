import {Home} from "./pages/Home"
import {Movies} from "./pages/Movies"
import {Contact} from "./pages/Contact"
import {Sessions} from "./pages/Sessions"
import {Routes, Route, BrowserRouter} from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='Movies' element={<Movies />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='Sessions' element={<Sessions />}/>
      </Routes>
    </BrowserRouter>
  )
}

