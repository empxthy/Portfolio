import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './components/pages/index/Index';
import AboutMe from "./components/pages/about/About";
import './main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route index element={<Index />} />
            <Route path={"/about"} element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;