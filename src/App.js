import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CoffeeInformation } from './screens'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CoffeeInformation />} />
            {/* <Route path="/resultado" element={<CoffeeInformation />} />  */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
