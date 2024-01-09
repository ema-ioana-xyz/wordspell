import GamePage from "./pages/GamePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game/:id" element={<GamePage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
