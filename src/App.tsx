import { Route, Routes } from 'react-router-dom'
import Hi from 'src/pages/Hi'
import Main from 'src/pages/Main'
import There from 'src/pages/There'

function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="hi" element={<Hi />} />
      <Route path="there" element={<There />} />
    </Routes>
  )
}

export default App
