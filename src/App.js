import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CoffeeInformation, Results } from './screens'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<CoffeeInformation />} />
            <Route path="/resultado/:coffee/:water" element={<Results />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
