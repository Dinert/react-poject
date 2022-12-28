import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '@/views/Login'
import Layout from '@/views/Layout'

function App () {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
