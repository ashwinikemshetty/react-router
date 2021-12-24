import './App.css'
import { BrowserRouter , Route, Routes, NavLink, Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Article from './Pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/articles/:id" element={<Article/>} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
