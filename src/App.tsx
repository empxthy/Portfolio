import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './components/pages/index/Index';
import AboutMe from "./components/pages/about/About";
import Resume from "./components/pages/resume/Resume";
import './main.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route index element={<Index />} />
            <Route path={"/about"} element={<AboutMe />} />
            <Route path={"/resume"} element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;